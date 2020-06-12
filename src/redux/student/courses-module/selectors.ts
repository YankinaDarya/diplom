import {createSelector} from "reselect";
import {AppStateType} from "../../store";

const getCoursesInfo = (state: AppStateType) => {
    return state.coursesReducer;
};

export const isCourseCreating = createSelector(getCoursesInfo,
    (courses) => {
        return courses.isCreating;
    });

export const isSuccessCreating = createSelector(getCoursesInfo,
    (courses) => {
        return courses.isSuccessCreateNewCourse;
    });

export const getErrorCourseCreatingMessage = createSelector(getCoursesInfo,
    (courses) => {
        return courses.errorCreateCourseMessage;
    });

export const getStudentCourses = createSelector(getCoursesInfo,
    (courses) => {
        return courses.studentCourses;
    });

export const getAllCourses = createSelector(getCoursesInfo,
    (courses) => {
        return courses.allCourses;
    });
