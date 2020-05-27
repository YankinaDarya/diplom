import {createSelector} from "reselect";
import {AppStateType} from "../store";

const getStudentInfo = (state: AppStateType) => {
    return state.adminReducer;
};

export const getAdminIsAuth = createSelector(getStudentInfo,
    (adminInfo) => {
        return adminInfo.adminIsAuth;
    });

export const getAdminId = createSelector(getStudentInfo,
    (adminInfo) => {
        return adminInfo.adminId;
    });

export const isAdding = createSelector(getStudentInfo,
    (adminInfo) => {
        return adminInfo.isAdding;
    });

export const getErrorAddMessage = createSelector(getStudentInfo,
    (adminInfo) => {
        return adminInfo.errorAddMessage;
    });

export const isSuccessAdd = createSelector(getStudentInfo,
    (adminInfo) => {
        return adminInfo.isSuccessAdd;
    });
