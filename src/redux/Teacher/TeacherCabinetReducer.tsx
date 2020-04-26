import {Contacts} from '../../types/types';

const SET_TEACHER_DATA = 'SET_TEACHER_DATA';
const SET_NEW_DATA = 'SET_NEW_DATA';
const SET_TEACHER_IS_AUTH = 'SET_TEACHER_IS_AUTH';

type StateType = {
    id: number | null;
    fullName: number | null;
    birthDate: string | null;
    passport: any;
    snils: any;
    department: string | null;
    address: any;
    contacts: Contacts | null;
    courses: Array<string> | null;
    position: string | null;
    rate: string | null;
    scienceDegree: string | null;
    teacherIsAuth: boolean;
};

const initialState = {
    id: 1234,
    fullName: 'Иван Иванович Иванов',
    birthDate: '24.06.1975',
    passport: '4521 203698',
    snils: '123-546-789 32',
    department: 'Корпоративных информационных систем',
    address: '141707, Московская обл, г.Балашиха, ул.Ленина, дом № 34А, квартира 16',
    contacts: {email: 'ivanov@mail.ru',
        telephone: '+79856654120', telegram: '@Ivanov'},
    courses: ['ВЭБ-разработка', 'ReactJS', 'Базы данных', 'Сети'],
    position: 'старший преподаватель',
    rate: 'полная',
    scienceDegree : 'доктор математических наук',
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
            };
        case SET_NEW_DATA:
            return {
                ...state,
                fullName: payload.data.fullName ? payload.data.fullName : state.fullName,
                birthDate: payload.data.birthday ? payload.data.birthday : state.birthDate,
                department: payload.data.department ? payload.data.department : state.department,
                passport: payload.data.passport ? payload.data.passport : state.passport,
                snils: payload.data.snils ? payload.data.snils : state.snils,
                address: payload.data.address ? payload.data.address : state.address,
                /*contacts: {
                    email: action.data.email ? action.data.email : state.contacts.email,
                    telephone: action.data.telephone ? action.data.telephone : state.contacts.telephone,
                    telegram: action.data.telegram ? action.data.telegram : state.contacts.telegram,
                },*/
            };
        case SET_TEACHER_IS_AUTH:
            return {
                ...state, teacherIsAuth: payload,
            };
        default:
            return state;
    }
};

export const setNewData = (data: any) => ({type: SET_NEW_DATA, data});
export const setTeacherIsAuth = (payload: boolean) => ({type: SET_TEACHER_IS_AUTH, payload});
