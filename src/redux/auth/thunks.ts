import { authAPI } from "../../api/auth";
import { loginType } from "./types";
import { setAdminIsAuthAction, setAdminIdAction } from "../admin/actions";
import { setStudentIdAction, setStudentIsAuth, setStudentUnreadNotificationsAction, setStudentUnreadMessagesAction } from "../student/cabinet-module/actions";
import { setTeacherIsAuth, setTeacherIdAction, setTeacherUnreadNotificationsAction, setTeacherUnreadMessagesAction } from "../Teacher/actions";
import {setIsAppStartLoading, setIsAppStopLoading} from "../app/actions";

export const getTeacherNotificationsNumberThunk = (id: number): any => (dispatch) => {
    authAPI.getUnreadNotificationsNumber(id)
        .then((response => {
            if (response) {
                dispatch(setTeacherUnreadNotificationsAction(response.not_num));
            }
        }))
};

export const getTeacherMessagesNumberThunk = (id: number): any => (dispatch) => {
    authAPI.getUnreadMessagesNumber(id)
        .then((response => {
            if (response) {
                dispatch(setTeacherUnreadMessagesAction(response.mes_num));
            }
        }))
};

export const getStudentNotificationsNumberThunk = (id: number): any => (dispatch) => {
    authAPI.getUnreadNotificationsNumber(id)
        .then((response => {
            if (response) {
                dispatch(setStudentUnreadNotificationsAction(response.not_num));
            }
        }))
};

export const getStudentMessagesNumberThunk = (id: number): any => (dispatch) => {
    authAPI.getUnreadMessagesNumber(id)
        .then((response => {
            if (response) {
                dispatch(setStudentUnreadMessagesAction(response.mes_num));
            }
        }))
};


export const getAuthInfoThunk = (): any =>
    (dispatch) => {
        dispatch(setIsAppStartLoading());
        authAPI.getUserInfo().then((response => {
            if (Boolean(response.data.length)) {
                const role = response.data[0].role;
                if(role === 'admin') {
                    dispatch(setAdminIdAction(response.data[0].id));
                    dispatch(setAdminIsAuthAction(true));
                }
                else if(role === 'student') {
                    dispatch(getStudentNotificationsNumberThunk(response.data[0].id));
                    dispatch(getStudentMessagesNumberThunk(response.data[0].id));
                    dispatch(setStudentIdAction(response.data[0].id));
                    dispatch(setStudentIsAuth(true));
                }
                else if(role === 'lecturer') {
                    dispatch(getTeacherNotificationsNumberThunk(response.data[0].id));
                    dispatch(getTeacherMessagesNumberThunk(response.data[0].id));
                    dispatch(setTeacherIdAction(response.data[0].id));
                    dispatch(setTeacherIsAuth(true));
                }
            }
        }));
        dispatch(setIsAppStopLoading());
    };

export const loginThunk = ({login, password}: loginType): any =>
    (dispatch) => {
    console.log(login, password);
        authAPI.login(login, password)
            .then((response => {
                if (response === "OK") {
                    dispatch(getAuthInfoThunk());
                }
            }))
    };

export const logoutThunk = (id: number): any => (dispatch) => {
    authAPI.logout(id)
        .then((response => {
            if (response === "OK") {
                dispatch(setAdminIsAuthAction(false));
                dispatch(setStudentIsAuth(false));
                dispatch(setTeacherIsAuth(false));
            }
        }))
};
