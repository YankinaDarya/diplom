import {teacherAPI} from "../../api/teacher";
import {
    setAllTeacherCoursesAction,
    setCopiedApprovedTeacherTimetableAction,
    setNewTeacherDataAction,
    setStartLoadingTeacherTimetablePageAction,
    setStopLoadingTeacherTimetablePageAction,
    setTeacherDataAction,
    setTeacherHasUnapprovedTimetableAction,
    setTeacherTimetableAction,
    updateTimeTableAction,
    setAllTeacherNotificationsAction,
    setAllTeacherMessagesAction,
    setStartTeacherPageLoading, setStopTeacherPageLoading
} from "./actions";
import {getCoursePlanThunk, getCourseNotificationsThunk} from "../student/courses-module/thunks";

export const updateTeacherInfoThunk = (id: number, payload: any): any =>
    (dispatch) => {
        teacherAPI.updateInfo(id, payload).then((response => {
            if (response === "OK") {
                dispatch(setNewTeacherDataAction(payload));
            }
        }))
    };

export const sentTeacherTimetableThunk = (id: number, data: any): any =>
    (dispatch) => {
        const payload = {lec_id: id, schedule: data};
        teacherAPI.sentTeacherTimetable(payload).then((response => {
            if (response === "OK") {
                dispatch(getTeacherUnapprovedTimetableThunk(id));
            }
        }))
    };

export const getTeacherInfoThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartTeacherPageLoading());
        teacherAPI.getInfo(id).then((response => {
            if (response) {
                dispatch(setTeacherDataAction(response));
                dispatch(setStopTeacherPageLoading());
            }
        }));
    };

export const getTeacherCoursesThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartTeacherPageLoading());
        teacherAPI.getTeacherCourses(id).then((response => {
            if (response) {
                dispatch(setAllTeacherCoursesAction(response.data));
                dispatch(setStopTeacherPageLoading());
            }
        }))
    };

export const getTeacherTimetableThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartTeacherPageLoading());
        teacherAPI.getTeacherTimetable(id).then((response => {
                if (response) {
                    response.schedule.forEach((lesson) => {
                        const lessonData = {
                            lessonNumber: lesson.time,
                            day: lesson.day_cd,
                            lessonName: lesson.name,
                            isLecture: lesson.islecture,
                            isSeminar: lesson.isseminar,
                            place: lesson.place,
                            courseId: lesson.course_id
                        };
                        dispatch(setTeacherTimetableAction({...lessonData}));
                        dispatch(setCopiedApprovedTeacherTimetableAction({...lessonData}));
                        dispatch(setStopTeacherPageLoading());
                    })
                }
            }
        ))
    };

export const getTeacherUnapprovedTimetableThunk = (id: number): any =>
    (dispatch) => {
        teacherAPI.getTeacherUnapprovedTimetable(id).then((response => {
                if (response) {
                    if (response.schedule.length !== 0) {
                        dispatch(setTeacherHasUnapprovedTimetableAction(true));
                    }
                    response.schedule.forEach((lesson) => {
                        const lessonData = {
                            lessonNumber: lesson.time,
                            day: lesson.day_cd,
                            lessonName: lesson.name,
                            isLecture: lesson.islecture,
                            isSeminar: lesson.isseminar,
                            place: lesson.place,
                            courseId: lesson.course_id
                        };
                        dispatch(updateTimeTableAction({...lessonData}));
                    })
                }
            }
        ))
    };

export const getTeacherTimetableInfoThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartLoadingTeacherTimetablePageAction());
        const promise = dispatch(getTeacherTimetableThunk(id));
        const promise2 = dispatch(getTeacherCoursesThunk(id));
        const promise3 = dispatch(getTeacherUnapprovedTimetableThunk(id));
        Promise.all([promise, promise2, promise3])
            .then(() => {
                dispatch(setStopLoadingTeacherTimetablePageAction());
            });
    };

export const getTeacherNotificationsThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartLoadingTeacherTimetablePageAction());
        teacherAPI.getTeacherNotifications(id).then((response => {
            if (response) {
                dispatch(setAllTeacherNotificationsAction(response));
                dispatch(setStopLoadingTeacherTimetablePageAction());
            }
        }))
    };

export const getTeacherMessagesThunk = (id: number): any =>
    (dispatch) => {
        teacherAPI.getTeacherMessages(id).then((response => {
            if (response) {
                dispatch(setAllTeacherMessagesAction(response));
            }
        }))
    };

export const readTeacherNotificationsThunk = (id: number, teacherId: number): any =>
    (dispatch) => {
        teacherAPI.readTeacherNotification(id).then((response => {
            if (response) {
                dispatch(getTeacherNotificationsThunk(teacherId));
            }
        }))
    };

export const readTeacherMessageThunk = (id: number, teacherId: number): any =>
    (dispatch) => {
        teacherAPI.readTeacherMessage(id).then((response => {
            if (response) {
                dispatch(getTeacherMessagesThunk(id));
            }
        }))
    };

export const updateWeekThunk = (payload: any, id: number): any =>
    (dispatch) => {
        teacherAPI.updateWeek(id, payload).then((response => {
            if (response === "OK") {
                dispatch(getCoursePlanThunk(id));
            }
        }))
    };

export const sentNotificationThunk = (id: number, payload: any): any =>
    (dispatch) => {
        teacherAPI.sentNotification(payload).then((response => {
            if (response === "OK") {
                dispatch(getCourseNotificationsThunk(id));
            }
        }))
    };
