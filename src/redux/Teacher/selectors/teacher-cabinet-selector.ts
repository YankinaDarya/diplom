import {createSelector} from "reselect";
import {AppStateType} from "../../store";

const getTeacherInfo = (state: AppStateType) => {
    return state.teacherReducer;
};

export const getTeacherIsAuth = createSelector(getTeacherInfo,
    (teacherInfo) => {
        return teacherInfo.teacherIsAuth;
    });

export const getTeacherId = createSelector(getTeacherInfo,
    (teacherInfo) => {
        return teacherInfo.teacherId;
    });

export const getTeacherNotificationsNumber = createSelector(getTeacherInfo,
    (teacherInfo) => {
        return teacherInfo.unreadNotifications;
    });

export const getTeacherMessagesNumber = createSelector(getTeacherInfo,
    (teacherInfo) => {
        return teacherInfo.unreadMessages;
    });

export const getTeacherMessages = createSelector(getTeacherInfo,
    (teacherInfo) => {
        return teacherInfo.teacherMessages;
    });

export const getTeacherNotifications = createSelector(getTeacherInfo,
    (teacherInfo) => {
        return teacherInfo.teacherNotifications;
    });

export const getTeacherPageLoading = createSelector(getTeacherInfo,
    (teacherInfo) => {
        return teacherInfo.isTeacherPageLoading;
    });
