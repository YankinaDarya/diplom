import {Contacts} from '../../types/types';

const SET_TEACHER_DATA = 'SET_TEACHER_DATA';
const SET_NEW_DATA = 'SET_NEW_DATA';

type StateType = {
};

const initialState = {
};

type InitialState = typeof initialState;

export const teacherTimetableReducer = (state = initialState, action: any):
    InitialState => {
    switch (action.type) {
        case SET_TEACHER_DATA:
            return {
                ...state,
            };
        case SET_NEW_DATA:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export const setNewData = (data: any) => ({type: SET_NEW_DATA, data});