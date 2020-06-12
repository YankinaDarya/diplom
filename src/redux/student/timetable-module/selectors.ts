import {AppStateType} from "../../store";
import {createSelector} from "reselect";

const getStudentTimetableInfo = (state: AppStateType) => {
    return state.studentTimetableReducer;
};

export const getStudentTimetableData = createSelector(getStudentTimetableInfo,
    (studentTimetableInfo) => {
        return studentTimetableInfo.timeTableData;
    });
