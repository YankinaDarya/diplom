import {courseAPI} from "../../../api/course";
import {courseInfoType} from "../../../api/course/_types";
import {
    setSuccessCreateCourseAction,
    setErrorCreateCourseAction,
    startCreatingNewCourseAction,
    stopCreatingNewCourseAction, setStudentCoursesAction, setAllCoursesAction
} from "./actions";
import {
    setCourseInfoAction,
    setCourseNotificationsAction,
    setCoursePlanAction, setCourseStudentsInfoAction,
    setStartLoadingCoursePageAction, setStartTeacherPageLoading, setStopLoadingCoursePageAction, setStopTeacherPageLoading
} from "../../Teacher/actions";
import {setStartStudentPageLoading, setStopStudentPageLoading} from "../cabinet-module/actions";

type PropsType = {
    id: number;
    courseData: courseInfoType;
};

export const createCourseThunk = ({id, courseData}: PropsType): any =>
    (dispatch) => {
        dispatch(startCreatingNewCourseAction());
        courseAPI.createNewCourse(id, courseData).then((response => {
            if (response === "OK") {
                dispatch(setSuccessCreateCourseAction(true));
                dispatch(setSuccessCreateCourseAction(false));
            } else {
                dispatch(setErrorCreateCourseAction(`${response}`));
            }
            dispatch(stopCreatingNewCourseAction());
        }))
    };

export const getCourseInfoThunk = (id: number): any =>
    (dispatch) => {
        courseAPI.getCourseInfo(id).then((response => {
            if (response) {
                dispatch(setCourseInfoAction(response));
            }
        }))
    };

export const getCoursePlanThunk = (id: number): any =>
    (dispatch) => {
        courseAPI.getCoursePlan(id).then((response => {
            if (response) {
                dispatch(setCoursePlanAction(response.data));
            }
        }))
    };

export const getCourseNotificationsThunk = (id: number): any =>
    (dispatch) => {
        courseAPI.getCourseNotifications(id).then((response => {
            if (response) {
                dispatch(setCourseNotificationsAction(response.data));
            }
        }))
    };

export const getCourseStudentsInfoThunk = (id: number): any =>
    (dispatch) => {
        courseAPI.getCourseStudentsInfo(id).then((response => {
            if (response) {
                dispatch(setCourseStudentsInfoAction(response));
            }
        }))
    };

export const getALLCourseInfoThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartTeacherPageLoading());
       /* dispatch(setStartLoadingCoursePageAction());*/
        const promise = dispatch(getCourseInfoThunk(id));
        const promise2 = dispatch(getCoursePlanThunk(id));
        const promise3 = dispatch(getCourseNotificationsThunk(id));
        const promise4 = dispatch(getCourseStudentsInfoThunk(id));
        Promise.all([promise, promise2, promise3, promise4])
            .then(() => {
                dispatch(setStopTeacherPageLoading());
               /* dispatch(setStopLoadingCoursePageAction());*/
            });
        /*dispatch(setStopTeacherPageLoading());*/
    };

export const getALLStudentCoursesThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartStudentPageLoading());
        courseAPI.getAllStudentCourses(id).then((response => {
            if (response) {
                dispatch(setStudentCoursesAction(response));
                dispatch(setStopStudentPageLoading());
            }
    }))
};

export const getALLCoursesThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartStudentPageLoading());
        courseAPI.getAllCourses().then((response => {
            if (response) {
                dispatch(setAllCoursesAction(response.data));
                dispatch(setStopStudentPageLoading());
            }
        }))
    };

export const enrollCourseThunk = (courseId: number, studentId: number): any =>
    (dispatch) => {
        courseAPI.enrollCourse(courseId, studentId).then((response => {
            if (response) {
                dispatch(getALLCoursesThunk(studentId));
            }
        }))
    };
