import {
    SET_ADMIN_IS_AUTH,
    SET_SUCCESS_ADD_ACTION,
    SET_ERROR_ADD_ACTION,
    SET_START_ADDING_ACTION,
    SET_STOP_ADDING_ACTION,
    SET_ADMIN_ID,
    SET_START_ADMIN_PAGE_LOADING,
    SET_STOP_ADMIN_PAGE_LOADING,
    SET_TIMETABLES_ACTION,
} from "./actions";

const initialState = {
    adminId: 0,
    adminIsAuth: false,
    errorAddMessage: '',
    isSuccessAdd: false,
    isAdding: false,
    isAdminPageLoading: false,
    timeTables: [],
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const adminAuthReducer = (state = initialState, {type, payload}: ActionsType,):
    InitialState => {
    switch (type) {
        case SET_ADMIN_IS_AUTH:
            return {
                ...state, adminIsAuth: payload,
            };
        case SET_ADMIN_ID:
            return {
                ...state, adminId: payload,
            };
        case SET_SUCCESS_ADD_ACTION:
            return {
                ...state, isSuccessAdd: payload,
            };
        case SET_ERROR_ADD_ACTION:
            return {
                ...state, errorAddMessage: payload,
            };
        case SET_START_ADDING_ACTION:
            return {
                ...state, isAdding: true,
            };
        case SET_STOP_ADDING_ACTION:
            return {
                ...state, isAdding: false,
            };
        case SET_START_ADMIN_PAGE_LOADING:
            return {
              ...state, isAdminPageLoading: true,
            };
        case SET_STOP_ADMIN_PAGE_LOADING:
            return {
                ...state, isAdminPageLoading: false,
            };
        case SET_TIMETABLES_ACTION:
            return {
                // @ts-ignore
                ...state, timeTables: [...state.timeTables, payload],
            };
        default:
            return state;
    }
};
