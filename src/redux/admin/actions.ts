import {Action, BaseAction, TimetableWeek} from "../../types/types";

// actions
export const SET_ADMIN_IS_AUTH = 'SET_ADMIN_IS_AUTH';
export const setAdminIsAuthAction: Action<boolean> = payload => ({type: SET_ADMIN_IS_AUTH, payload});

export const SET_ADMIN_ID = 'SET_ADMIN_ID';
export const setAdminIdAction: Action<number> = payload => ({type: SET_ADMIN_ID, payload});

export const SET_START_ADMIN_PAGE_LOADING = 'SET_START_ADMIN_PAGE_LOADING';
export const setStartAdminPageLoadingAction: BaseAction = () => ({type: SET_START_ADMIN_PAGE_LOADING});

export const SET_STOP_ADMIN_PAGE_LOADING = 'SET_STOP_ADMIN_PAGE_LOADING';
export const setStopAdminPageLoadingAction: BaseAction = () => ({type: SET_STOP_ADMIN_PAGE_LOADING});

export const SET_SUCCESS_ADD_ACTION = 'SET_SUCCESS_ADD_ACTION';
export const setSuccessAddAction: Action<boolean> = payload => ({type: SET_SUCCESS_ADD_ACTION, payload});

export const SET_ERROR_ADD_ACTION = 'SET_ERROR_ADD_ACTION';
export const setErrorAddAction: Action<string> = payload => ({type: SET_ERROR_ADD_ACTION, payload});

export const SET_START_ADDING_ACTION = 'SET_START_ADDING_ACTION';
export const setStartAddingAction: BaseAction = () => ({type: SET_START_ADDING_ACTION});

export const SET_STOP_ADDING_ACTION = 'SET_STOP_ADDING_ACTION';
export const setStopAddingAction: BaseAction = () => ({type: SET_STOP_ADDING_ACTION});

export const SET_TIMETABLES_ACTION = 'SET_TIMETABLES_ACTION';
export const setTimetablesAction: Action<any> = payload => ({type: SET_TIMETABLES_ACTION, payload});

export const SET_EMPTY_TIMETABLES_ACTION = 'SET_EMPTY_TIMETABLES_ACTION';
export const setEmptyTimetablesAction: BaseAction = () => ({type: SET_EMPTY_TIMETABLES_ACTION});
