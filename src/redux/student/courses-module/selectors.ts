import {createSelector} from "reselect";
import {AppStateType} from "../../store";

const getStudentInfo = (state: AppStateType) => {
    return state.studentCoursesReducer;
};

export const getStudentAllCourses = createSelector(getStudentInfo,
    (studentCourses) => {
        return studentCourses.studentCourses;
    });
