import { studentAPI } from "../../../api/student";
import {setAllStudentMessagesAction, setAllStudentNotificationsAction} from "./actions";
import {setStartStudentPageLoading, setStopStudentPageLoading} from "../cabinet-module/actions";
import { getStudentAllInfoThunk } from "../cabinet-module/thunks";
import {getStudentMessagesNumberThunk, getStudentNotificationsNumberThunk} from "../../auth/thunks";

export const getStudentNotificationsThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartStudentPageLoading());
        studentAPI.getStudentNotifications(id).then((response => {
            if (response) {
                dispatch(setAllStudentNotificationsAction(response));
                dispatch(setStopStudentPageLoading());
            }
        }))
    };

export const getStudentMessagesThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartStudentPageLoading());
        studentAPI.getStudentMessages(id).then((response => {
            if (response) {
                dispatch(setAllStudentMessagesAction(response));
                dispatch(setStopStudentPageLoading());
            }
        }))
    };

export const readStudentNotificationsThunk = (id: number, studentId: number): any =>
    (dispatch) => {
        studentAPI.readStudentNotification(id).then((response => {
            if (response) {
                dispatch(getStudentNotificationsNumberThunk(studentId));
                dispatch(getStudentNotificationsThunk(studentId));
            }
        }))
    };

export const readStudentMessageThunk = (id: number, studentId: number): any =>
    (dispatch) => {
        studentAPI.readStudentMessage(id).then((response => {
            if (response) {
                dispatch(getStudentMessagesNumberThunk(studentId));
                dispatch(getStudentMessagesThunk(studentId));
            }
        }))
    };

export const getInitializeStudentMessagesThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartStudentPageLoading());
        const promise = dispatch(getStudentMessagesThunk(id));
        const promise2 = dispatch(getStudentAllInfoThunk(id));
        Promise.all([promise, promise2])
            .then(() => {
                dispatch(setStopStudentPageLoading());
            });
    };

export const studentAnswerThunk = (userId: number, message: string, chain_num: number): any =>
    (dispatch) => {
        studentAPI.answer(userId, message, chain_num).then((response => {
            if (response === "OK") {
                dispatch(getInitializeStudentMessagesThunk(userId));
            }
        }))
    };
