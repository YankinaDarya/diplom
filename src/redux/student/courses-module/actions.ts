import {Action, BaseAction} from "../../../types/types";

export const SEND_QUESTION = 'SEND_QUESTION';
export const sendQuestionAction: Action<any> = (payload) => ({
    type: SEND_QUESTION,
    payload,
});

export const START_CREATING_NEW_COURSE_ACTION = 'START_CREATING_NEW_COURSE_ACTION';
export const startCreatingNewCourseAction: BaseAction = () => ({
    type: START_CREATING_NEW_COURSE_ACTION,
});

export const STOP_CREATING_NEW_COURSE_ACTION = 'STOP_CREATING_NEW_COURSE_ACTION';
export const stopCreatingNewCourseAction: BaseAction = () => ({
    type: STOP_CREATING_NEW_COURSE_ACTION,
});

export const SET_SUCCESS_CREAT_COURSE_ACTION = 'SET_SUCCESS_CREAT_COURSE_ACTION';
export const setSuccessCreateCourseAction: Action<boolean> = payload => ({type: SET_SUCCESS_CREAT_COURSE_ACTION, payload});

export const SET_ERROR_CREAT_COURSE_ACTION = 'SET_ERROR_CREAT_COURSE_ACTION';
export const setErrorCreateCourseAction: Action<string> = payload => ({type: SET_ERROR_CREAT_COURSE_ACTION, payload});
