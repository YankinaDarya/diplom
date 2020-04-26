import {SET_NEW_STUDENT_DATA, SET_STUDENT_DATA, SET_STUDENT_IS_AUTH} from "./actions";

type StateType = {
    id: number | null;
    fullName: number | null;
    birthDate: string | null;
    passport: any;
    snils: any;
    department: string | null;
    address: any;
    email: string;
    courses: Array<string> | null;
    course: string | null;
    studentIsAuth: boolean;
};

const initialState = {
    id: 1235,
    fullName: 'Иван Сергеевич Сергеев',
    birthDate: '24.06.1975',
    passport: '4521 203698',
    snils: '123-546-789 32',
    department: 'Корпоративных информационных систем',
    address: '141707, Московская обл, г.Балашиха, ул.Ленина, дом № 34А, квартира 16',
    email: 'sergeev@mail.ru',
    courses: ['ВЭБ-разработка', 'ReactJS', 'Базы данных', 'Сети'],
    coure: '4 курс',
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
        default:
            return state;
    }
};


export const setStudentIsAuth = (payload: boolean) => ({type: SET_STUDENT_IS_AUTH, payload});
