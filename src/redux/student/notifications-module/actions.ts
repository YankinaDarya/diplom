import {Action} from "../../../types/types";

export const SET_ALL_STUDENT_NOTIFICATIONS = 'SET_ALL_STUDENT_NOTIFICATIONS';
export const setAllStudentNotificationsAction:  Action<any> = (payload) => ({
    type: SET_ALL_STUDENT_NOTIFICATIONS,
    payload,
});

export const SET_ALL_STUDENT_MESSAGES = 'SET_ALL_STUDENT_MESSAGES';
export const setAllStudentMessagesAction:  Action<any> = (payload) => ({
    type: SET_ALL_STUDENT_MESSAGES,
    payload,
});
