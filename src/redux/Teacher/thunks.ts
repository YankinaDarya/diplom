import {teacherAPI} from "../../api/teacher";
import {
    setAllTeacherCoursesAction, setCopiedApprovedTeacherTimetableAction,
    setNewTeacherDataAction,
    setStartLoadingTeacherTimetablePageAction,
    setStopLoadingTeacherTimetablePageAction,
    setTeacherDataAction, setTeacherHasUnapprovedTimetableAction, setTeacherTimetableAction, updateTimeTableAction
} from "./actions";

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
        teacherAPI.getInfo(id).then((response => {
            if (response) {
                dispatch(setTeacherDataAction(response));
            }
        }))
    };

export const getTeacherCoursesThunk = (id: number): any =>
    (dispatch) => {
        teacherAPI.getTeacherCourses(id).then((response => {
            if (response) {
                dispatch(setAllTeacherCoursesAction(response.data));
            }
        }))
    };

export const getTeacherTimetableThunk = (id: number): any =>
    (dispatch) => {
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
                    })
                }
            }
        ))
    };

export const getTeacherUnapprovedTimetableThunk = (id: number): any =>
    (dispatch) => {
        teacherAPI.getTeacherUnapprovedTimetable(id).then((response => {
                if (response) {
                    if(response.schedule.length !== 0) {
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
