import {INITIALIZED_SUCCESS, START_APP_LOADING, STOP_APP_LOADING} from "./actions";

const initialState = {
    appInitialized: false,
    isLoading: false,
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const appReducer = (state = initialState, {type, payload}: ActionsType,):
    InitialState => {
    switch (type) {
        case START_APP_LOADING:
            return{
                ...state, isLoading: true,
            };
        case STOP_APP_LOADING:
            return{
                ...state, isLoading: false,
            };
        case INITIALIZED_SUCCESS:
            return {
                ...state, appInitialized: true,
            };
        default:
            return state;
    }
};
