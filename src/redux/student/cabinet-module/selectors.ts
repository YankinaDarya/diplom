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

export const getStudentLastname = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.lastname
    });

export const getStudentMidname = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.midname
    });

export const getStudentFirstname = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.firstname
    });

export const getStudentBirth = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.birthdate
    });
export const getStudentFaculty = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.faculty
    });
export const getStudentPhone = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.phone
    });
export const getStudentTelegram = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.telegram
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
export const getStudentGroup = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.group
    });
export const getStudentCourses = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.courses
    });
export const getStudentCourse = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.course
    });
export const getStudentMessagesNumber = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.studentUnreadMessagesNumber
    });
export const getStudentNotifNumber = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.studentUnreadNotifNumber
    });
export const getStudentPageLoading = createSelector(getStudentInfo,
    (studentInfo) => {
        return studentInfo.isStudentPageLoading
    });
export const getStudentFullName = createSelector(getStudentInfo,
    (studentInfo) => {
        return `${studentInfo.lastname} ${studentInfo.firstname} ${studentInfo.midname}`;
    });
