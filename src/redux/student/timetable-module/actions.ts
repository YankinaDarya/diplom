import {Action, BaseAction} from "../../../types/types";

export const SET_STUDENT_TIMETABLE = 'SET_STUDENT_TIMETABLE';
export const setStudentTimetableAction:  Action<any> = (payload) => ({
    type: SET_STUDENT_TIMETABLE,
    payload,
});

export const START_LOADING_STUDENT_TIMETABLE_PAGE_ACTION = 'START_LOADING_STUDENT_TIMETABLE_PAGE_ACTION';
export const setStudentTimetableStartLoadingAction: BaseAction = () => ({
    type: START_LOADING_STUDENT_TIMETABLE_PAGE_ACTION,
});

export const STOP_LOADING_STUDENT_TIMETABLE_PAGE_ACTION = 'STOP_LOADING_STUDENT_TIMETABLE_PAGE_ACTION';
export const setStudentTimetableStopLoadingAction: BaseAction = () => ({
    type: STOP_LOADING_STUDENT_TIMETABLE_PAGE_ACTION,
});
