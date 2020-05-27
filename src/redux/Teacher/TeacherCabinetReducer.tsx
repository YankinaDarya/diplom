import {SET_TEACHER_ID_ACTION, SET_TEACHER_IS_AUTH, SET_NEW_TEACHER_DATA, SET_TEACHER_DATA} from './actions';

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
        default:
            return state;
    }
};
