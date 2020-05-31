import {createSelector} from "reselect";
import {AppStateType} from "../../store";

const getTeacherTimetableInfo = (state: AppStateType) => {
    return state.teacherTimetableReducer;
};

export const getTeacherTimetableData = createSelector(getTeacherTimetableInfo,
    (teacherTimetableInfo) => {
        return teacherTimetableInfo.timeTableData;
    });

export const getTeacherApprovedTimetableData = createSelector(getTeacherTimetableInfo,
    (teacherTimetableInfo) => {
        return teacherTimetableInfo.approvedTimetableData;
    });

export const getCopiedTeacherApprovedTimetableData = createSelector(getTeacherTimetableInfo,
    (teacherTimetableInfo) => {
        return teacherTimetableInfo.copiedApprovedTimeTableData;
    });

export const getHasUnapprovedTimetable = createSelector(getTeacherTimetableInfo,
    (teacherTimetableInfo) => {
        return teacherTimetableInfo.hasUnapprovedTimetable;
    });
