import {SET_ALL_STUDENT_NOTIFICATIONS, SET_ALL_STUDENT_MESSAGES} from "./actions";

const initialState = {
    studentNotifications: [],
    studentMessages: [],
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const studentNotificationsReducer = (state = initialState,
                               {type, payload}: ActionsType,) => {
    switch (type) {
        case SET_ALL_STUDENT_NOTIFICATIONS:
            return {
                ...state, studentNotifications: payload,
            };
        case SET_ALL_STUDENT_MESSAGES:
            return {
                ...state, studentMessages: payload,
            };
        default:
            return state;
    }
};
