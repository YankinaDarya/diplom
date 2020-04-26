import {createSelector} from "reselect";
import {AppStateType} from "../../store";

const getTeacherInfo = (state: AppStateType) => {
    return state.teacherReducer;
};

export const getTeacherIsAuth = createSelector(getTeacherInfo,
    (teacherInfo) => {
        return teacherInfo.teacherIsAuth;
    });
