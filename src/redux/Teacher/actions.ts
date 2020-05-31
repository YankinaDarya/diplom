import {CourseType} from "./TeacherCoursesReducer";
import {Action, BaseAction} from "../../types/types";

export const SET_TEACHER_IS_AUTH = 'SET_TEACHER_IS_AUTH';
export const setTeacherIsAuth = (payload: boolean) => ({type: SET_TEACHER_IS_AUTH, payload});

export const SET_TEACHER_ID_ACTION = 'SET_TEACHER_ID_ACTION';
export const setTeacherIdAction = (payload: boolean) => ({type: SET_TEACHER_ID_ACTION, payload});

export const SET_NEW_TEACHER_DATA = 'SET_NEW_TEACHER_DATA';
export const setNewTeacherDataAction = (payload: any) => ({type: SET_NEW_TEACHER_DATA, payload});

export const SET_TEACHER_DATA = 'SET_TEACHER_DATA';
export const setTeacherDataAction = (payload: any) => ({type: SET_TEACHER_DATA, payload});

export const SET_ALL_TEACHER_COURSES_ACTION = 'SET_ALL_TEACHER_COURSES_ACTION';
export const setAllTeacherCoursesAction = (payload: Array<CourseType>) => ({type: SET_ALL_TEACHER_COURSES_ACTION, payload});

export const SET_COURSE_INFO_ACTION = 'SET_COURSE_INFO_ACTION';
export const setCourseInfoAction = (payload: any) => ({type: SET_COURSE_INFO_ACTION, payload});

export const SET_COURSE_PLAN_ACTION = 'SET_COURSE_PLAN_ACTION';
export const setCoursePlanAction = (payload: any) => ({type: SET_COURSE_PLAN_ACTION, payload});

export const SET_COURSE_STUDENTS_INFO_ACTION = 'SET_COURSE_STUDENTS_INFO_ACTION';
export const setCourseStudentsInfoAction = (payload: any) => ({type: SET_COURSE_STUDENTS_INFO_ACTION, payload});

export const SET_COURSE_NOTIFICATIONS_ACTION = 'SET_COURSE_NOTIFICATIONS_ACTION';
export const setCourseNotificationsAction = (payload: Array<string>) => ({type: SET_COURSE_NOTIFICATIONS_ACTION, payload});

export const START_LOADING_COURSE_PAGE_ACTION = 'START_LOADING_COURSE_PAGE_ACTION';
export const setStartLoadingCoursePageAction: BaseAction = () => ({type: START_LOADING_COURSE_PAGE_ACTION});

export const STOP_LOADING_COURSE_PAGE_ACTION = 'STOP_LOADING_COURSE_PAGE_ACTION';
export const setStopLoadingCoursePageAction: BaseAction = () => ({type: STOP_LOADING_COURSE_PAGE_ACTION});

export const START_LOADING_TEACHER_TIMETABLE_PAGE_ACTION = 'START_LOADING_TEACHER_TIMETABLE_PAGE_ACTION';
export const setStartLoadingTeacherTimetablePageAction: BaseAction = () => ({type: START_LOADING_TEACHER_TIMETABLE_PAGE_ACTION});

export const STOP_LOADING_TEACHER_TIMETABLE_PAGE_ACTION = 'STOP_LOADING_TEACHER_TIMETABLE_PAGE_ACTION';
export const setStopLoadingTeacherTimetablePageAction: BaseAction = () => ({type: STOP_LOADING_TEACHER_TIMETABLE_PAGE_ACTION});

export const UPDATE_TIMETABLE = 'UPDATE_TIMETABLE';
export const updateTimeTableAction:  Action<any> = (payload) => ({
    type: UPDATE_TIMETABLE,
    payload,
});

export const SET_TEACHER_TIMETABLE = 'SET_TEACHER_TIMETABLE';
export const setTeacherTimetableAction:  Action<any> = (payload) => ({
    type: SET_TEACHER_TIMETABLE,
    payload,
});

export const SET_COPIED_APPROVED_TEACHER_TIMETABLE = 'SET_COPIED_APPROVED_TEACHER_TIMETABLE';
export const setCopiedApprovedTeacherTimetableAction:  Action<any> = (payload) => ({
    type: SET_COPIED_APPROVED_TEACHER_TIMETABLE,
    payload,
});

export const SET_TEACHER_HAS_UNAPPROVED_TIMETABLE = 'SET_TEACHER_HAS_UNAPPROVED_TIMETABLE';
export const setTeacherHasUnapprovedTimetableAction:  Action<boolean> = (payload) => ({
    type: SET_TEACHER_HAS_UNAPPROVED_TIMETABLE,
    payload,
});

export const TMP = 'TMP';
export const sendNotificationAction = (payload: any) => ({type: TMP, payload});
