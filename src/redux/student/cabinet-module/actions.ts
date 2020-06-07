import {Action} from "../../../types/types";

export const SET_STUDENT_DATA = 'SET_STUDENT_DATA';

export const SET_NEW_STUDENT_DATA = 'SET_NEW_STUDENT_DATA';
export const setNewStudentData = (data: any) => ({type: SET_NEW_STUDENT_DATA, data});

export const SET_STUDENT_IS_AUTH = 'SET_STUDENT_IS_AUTH';
export const setStudentIsAuth = (payload: boolean) => ({type: SET_STUDENT_IS_AUTH, payload});

export const SET_STUDENT_ID_ACTION = 'SET_STUDENT_ID_ACTION';
export const setStudentIdAction = (payload: boolean) => ({type: SET_STUDENT_ID_ACTION, payload});

export const SET_STUDENT_UNREAD_NOTIFICATIONS_NUMBER = 'SET_STUDENT_UNREAD_NOTIFICATIONS_NUMBER';
export const setStudentUnreadNotificationsAction:  Action<number> = (payload) => ({
    type: SET_STUDENT_UNREAD_NOTIFICATIONS_NUMBER,
    payload,
});

export const SET_STUDENT_UNREAD_MESSAGES_NUMBER = 'SET_STUDENT_UNREAD_MESSAGES_NUMBER';
export const setStudentUnreadMessagesAction:  Action<number> = (payload) => ({
    type: SET_STUDENT_UNREAD_MESSAGES_NUMBER,
    payload,
});
