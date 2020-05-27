import { INITIALIZED_SUCCESS } from "./actions";

const initialState = {
    appInitialized: false
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const appReducer = (state = initialState, {type, payload}: ActionsType,):
    InitialState => {
    switch (type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, appInitialized: true,
            };
        default:
            return state;
    }
};
