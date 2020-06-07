import {
    SET_TEACHER_ID_ACTION,
    SET_TEACHER_IS_AUTH,
    SET_NEW_TEACHER_DATA,
    SET_TEACHER_DATA,
    SET_TEACHER_UNREAD_NOTIFICATIONS_NUMBER,
    SET_TEACHER_UNREAD_MESSAGES_NUMBER,
    SET_ALL_TEACHER_NOTIFICATIONS,
    SET_ALL_TEACHER_MESSAGES,
    SET_START_TEACHER_PAGE_LOADING,
    SET_STOP_TEACHER_PAGE_LOADING
} from './actions';

const initialState = {
    teacherId: 0,
    firstname: '',
    midname: '',
    lastname: '',
    birthdate: '',
    passport: '',
    snils: '',
    department: '',
    address: '',
    email: '',
    telephone: '',
    telegram: '',
    courses: [],
    position: '',
    rate: '',
    sciencedegree : '',
    teacherIsAuth: false,
    unreadNotifications: 0,
    unreadMessages: 0,
    teacherNotifications: [],
    teacherMessages: [],
    isTeacherPageLoading: false,
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const teacherReducer = (state = initialState, {type, payload}: ActionsType,):
    InitialState => {
    switch (type) {
        case SET_TEACHER_DATA:
            return {
                ...state,
                firstname: payload.firstname,
                midname: payload.midname,
                lastname: payload.lastname,
                birthdate: payload.birthdate,
                department: payload.department,
                passport: payload.passport,
                snils: payload.snils,
                address: payload.address,
                email: payload.email,
                telephone: payload.phone,
                telegram: payload.telegram,
                position: payload.position,
                rate: payload.rate,
                sciencedegree: payload.sciencedegree,
            };
        case SET_NEW_TEACHER_DATA:
            return {
                ...state,
                firstname: payload.firstname ? payload.firstname : state.firstname,
                midname: payload.midname ? payload.midname : state.midname,
                lastname: payload.lastname ? payload.lastname : state.lastname,
                birthdate: payload.birthdate ? payload.birthdate : state.birthdate,
                department: payload.department ? payload.department : state.department,
                passport: payload.passport ? payload.passport : state.passport,
                snils: payload.snils ? payload.snils : state.snils,
                address: payload.address ? payload.address : state.address,
                email: payload.email ? payload.email : state.email,
                telephone: payload.phone ? payload.phone : state.telephone,
                telegram: payload.telegram ? payload.telegram : state.telegram,
                position: payload.position ? payload.position : state.position,
                rate: payload.rate ? payload.rate : state.rate,
                sciencedegree: payload.sciencedegree ? payload.sciencedegree : state.sciencedegree,
            };
        case SET_TEACHER_IS_AUTH:
            return {
                ...state, teacherIsAuth: payload,
            };
        case SET_TEACHER_ID_ACTION:
            return {
                ...state, teacherId: payload,
            };
        case SET_TEACHER_UNREAD_NOTIFICATIONS_NUMBER:
            return {
                ...state, unreadNotifications: payload,
            };
        case SET_TEACHER_UNREAD_MESSAGES_NUMBER:
            return {
                ...state, unreadMessages: payload,
            };
        case SET_ALL_TEACHER_NOTIFICATIONS:
            return {
                ...state, teacherNotifications: payload,
            };
        case SET_ALL_TEACHER_MESSAGES:
            return {
                ...state, teacherMessages: payload,
            };
        case SET_START_TEACHER_PAGE_LOADING:
            return {
                ...state, isTeacherPageLoading: true,
            };
        case SET_STOP_TEACHER_PAGE_LOADING:
            return {
                ...state, isTeacherPageLoading: false,
            };
        default:
            return state;
    }
};
