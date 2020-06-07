import {createSelector} from "reselect";
import {AppStateType} from "../../store";

const getStudentInfo = (state: AppStateType) => {
    return state.studentReducer;
};

export const getStudentIsAuth = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.studentIsAuth;
    });

export const getStudentId = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.studentId;
    });

export const getStudentName = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.fullName
    });

export const getStudentBirth = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.birthDate
    });
export const getStudentPassport = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.passport
    });
export const getStudentSnils = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.snils
    });
export const getStudentDepartment = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.department
    });
export const getStudentAddress = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.address
    });
export const getStudentEmail = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.email
    });
export const getStudentCourses = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.courses
    });
export const getStudentCourse = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.coure
    });
export const getStudentMessagesNumber = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.studentUnreadMessagesNumber
    });
export const getStudentNotifNumber = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.studentUnreadMessagesNumber
    });
