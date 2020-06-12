import {createSelector} from "reselect";
import {AppStateType} from "../../store";

const getStudentsNotification = (state: AppStateType) => {
    return state.studentNotificationsReducer;
};

export const getStudentMessages = createSelector(getStudentsNotification,
    (studentsNotification) => {
        return studentsNotification.studentMessages;
    });

export const getStudentNotifications = createSelector(getStudentsNotification,
    (studentsNotification) => {
        return studentsNotification.studentNotifications;
    });
