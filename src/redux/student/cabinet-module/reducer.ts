import {
    SET_NEW_STUDENT_DATA,
    SET_STUDENT_DATA,
    SET_STUDENT_IS_AUTH,
    SET_STUDENT_ID_ACTION,
    SET_STUDENT_UNREAD_NOTIFICATIONS_NUMBER, SET_STUDENT_UNREAD_MESSAGES_NUMBER,
    SET_STUDENT_PAGE_START_LOADING,
    SET_STUDENT_PAGE_STOP_LOADING,
} from "./actions";

const initialState = {
    studentId: 0,
    lastname: '',
    midname: '',
    firstname: '',
    course: 0,
    group: '',
    birthdate: '',
    department: '',
    address: '',
    email: '',
    faculty: '',
    phone: '',
    telegram: '',
    isStudentPageLoading: false,
    courses: [],
    studentIsAuth: false,
    studentUnreadNotifNumber: 0,
    studentUnreadMessagesNumber: 0,
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const studentReducer = (state = initialState, {type, payload}: ActionsType,):
    InitialState => {
    switch (type) {
        case SET_STUDENT_DATA:
            return {
                ...state,
                lastname: payload.lastname,
                midname: payload.midname,
                firstname: payload.firstname,
                course: payload.course,
                group: payload.group,
                birthdate: payload.birthdate,
                department: payload.department,
                address: payload.address,
                email: payload.email,
                faculty: payload.faculty,
                phone: payload.phone,
                telegram: payload.telegram,
            };
        case SET_NEW_STUDENT_DATA:
            return {
                ...state,
                lastname: payload.lastname ? payload.lastname : state.lastname,
                midname: payload.midname ? payload.midname : state.midname,
                firstname: payload.firstname ? payload.firstname : state.firstname,
                birthdate: payload.birthdate ? payload.birthdate : state.birthdate,
                department: payload.department ? payload.department : state.department,
                course: payload.course ? payload.course : state.course,
                faculty: payload.faculty ? payload.faculty : state.faculty,
                address: payload.address ? payload.address : state.address,
                email: payload.email ? payload.email : state.email,
                phone: payload.phone ? payload.phone : state.phone,
                telegram: payload.telegram ? payload.telegram : state.telegram,
                group: payload.group ? payload.group : state.group,
            };
        case SET_STUDENT_IS_AUTH:
            return {
                ...state, studentIsAuth: payload,
            };
        case SET_STUDENT_ID_ACTION:
            return {
                ...state, studentId: payload,
            };
        case SET_STUDENT_UNREAD_NOTIFICATIONS_NUMBER:
            return {
                ...state, studentUnreadNotifNumber: payload,
            };
        case SET_STUDENT_UNREAD_MESSAGES_NUMBER:
            return {
                ...state, studentUnreadMessagesNumber: payload,
            };
        case SET_STUDENT_PAGE_START_LOADING:
            return {
                ...state, isStudentPageLoading: true,
            };
        case SET_STUDENT_PAGE_STOP_LOADING:
            return {
                ...state, isStudentPageLoading: false
            };
        default:
            return state;
    }
};
