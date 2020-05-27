import {Action, BaseAction} from "../../types/types";
import { NewUserType } from "./types";

// actions
export const SET_ADMIN_IS_AUTH = 'SET_ADMIN_IS_AUTH';
export const setAdminIsAuthAction: Action<boolean> = payload => ({type: SET_ADMIN_IS_AUTH, payload});

export const SET_ADMIN_ID = 'SET_ADMIN_ID';
export const setAdminIdAction: Action<number> = payload => ({type: SET_ADMIN_ID, payload});

export const SET_SUCCESS_ADD_ACTION = 'SET_SUCCESS_ADD_ACTION';
export const setSuccessAddAction: Action<boolean> = payload => ({type: SET_SUCCESS_ADD_ACTION, payload});

export const SET_ERROR_ADD_ACTION = 'SET_ERROR_ADD_ACTION';
export const setErrorAddAction: Action<string> = payload => ({type: SET_ERROR_ADD_ACTION, payload});

export const SET_START_ADDING_ACTION = 'SET_START_ADDING_ACTION';
export const setStartAddingAction: BaseAction = () => ({type: SET_START_ADDING_ACTION});

export const SET_STOP_ADDING_ACTION = 'SET_STOP_ADDING_ACTION';
export const setStopAddingAction: BaseAction = () => ({type: SET_STOP_ADDING_ACTION});


/*// requests actions
export const ADD_USER = 'ADD_USER';
export const addUserAction: Action<NewUserType> = payload => ({type: ADD_USER, payload});*/
