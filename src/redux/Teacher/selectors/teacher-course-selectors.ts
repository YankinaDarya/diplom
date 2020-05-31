import {createSelector} from "reselect";
import {AppStateType} from "../../store";

const getTeacherCourseInfo = (state: AppStateType) => {
    return state.teacherCoursesReducer;
};

export const getCourseMainInfo = createSelector(getTeacherCourseInfo,
    (teacherCourseInfo) => {
        return teacherCourseInfo.course;
    });

export const getTeacherPlan = createSelector(getTeacherCourseInfo,
    (teacherCourseInfo) => {
        return teacherCourseInfo.plan;
    });

export const getTeacherStudentsInfo = createSelector(getTeacherCourseInfo,
    (teacherCourseInfo) => {
        return teacherCourseInfo.students;
    });

export const getTeacherCourseNotificationsInfo = createSelector(getTeacherCourseInfo,
    (teacherCourseInfo) => {
        return teacherCourseInfo.notifications;
    });

export const isTeacherCoursePageLoading = createSelector(getTeacherCourseInfo,
    (teacherCourseInfo) => {
        return teacherCourseInfo.isCoursePageLoading;
    });
