import {SET_NEW_STUDENT_DATA, SET_STUDENT_DATA, SET_STUDENT_IS_AUTH, SET_STUDENT_ID_ACTION} from "./actions";

const initialState = {
    studentId: 0,
    fullName: '',
    birthDate: '',
    passport: '',
    snils: '',
    department: '',
    address: '',
    email: '',
    courses: [],
    coure: '',
    studentIsAuth: false,
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
            };
        case SET_NEW_STUDENT_DATA:
            return {
                ...state,
                fullName: payload.data.fullName ? payload.data.fullName : state.fullName,
                birthDate: payload.data.birthday ? payload.data.birthday : state.birthDate,
                department: payload.data.department ? payload.data.department : state.department,
                passport: payload.data.passport ? payload.data.passport : state.passport,
                snils: payload.data.snils ? payload.data.snils : state.snils,
                address: payload.data.address ? payload.data.address : state.address,
                email: payload.data.email ? payload.data.email : state.email
            };
        case SET_STUDENT_IS_AUTH:
            return {
                ...state, studentIsAuth: payload,
            };
        case SET_STUDENT_ID_ACTION:
            return {
                ...state, studentId: payload,
            };
        default:
            return state;
    }
};
