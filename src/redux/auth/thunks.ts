import { authAPI } from "../../api/auth";
import { loginType } from "./types";
import { setAdminIsAuthAction, setAdminIdAction } from "../admin/actions";
import { setStudentIdAction, setStudentIsAuth } from "../student/cabinet-module/actions";
import { setTeacherIsAuth, setTeacherIdAction } from "../Teacher/actions";

export const getAuthInfoThunk = (): any =>
    (dispatch) => {
        authAPI.getUserInfo().then((response => {
            if (Boolean(response.data.length)) {
                const role = response.data[0].role;
                if(role === 'admin') {
                    dispatch(setAdminIdAction(response.data[0].id));
                    dispatch(setAdminIsAuthAction(true));
                }
                else if(role === 'student') {
                    dispatch(setStudentIdAction(response.data[0].id));
                    dispatch(setStudentIsAuth(true));
                }
                else if(role === 'lecturer') {
                    dispatch(setTeacherIdAction(response.data[0].id));
                    dispatch(setTeacherIsAuth(true));
                }
            }
        }))
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
