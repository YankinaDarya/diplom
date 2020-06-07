import {BaseAction} from "../../types/types";

// actions
export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
export const setInitializedSuccessAction: BaseAction = () => ({type: INITIALIZED_SUCCESS});

export const START_APP_LOADING = 'START_APP_LOADING';
export const setIsAppStartLoading: BaseAction = () => ({type: START_APP_LOADING});

export const STOP_APP_LOADING = 'STOP_APP_LOADING';
export const setIsAppStopLoading: BaseAction = () => ({type: STOP_APP_LOADING});
