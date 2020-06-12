import { studentAPI } from "../../../api/student";
import {setAllStudentMessagesAction, setAllStudentNotificationsAction} from "./actions";
import {setStartStudentPageLoading, setStopStudentPageLoading} from "../cabinet-module/actions";

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
                dispatch(getStudentNotificationsThunk(studentId));
            }
        }))
    };

export const readStudentMessageThunk = (id: number, studentId: number): any =>
    (dispatch) => {
        studentAPI.readStudentMessage(id).then((response => {
            if (response) {
                dispatch(getStudentMessagesThunk(studentId));
            }
        }))
    };
