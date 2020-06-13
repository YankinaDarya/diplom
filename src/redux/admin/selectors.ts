import {createSelector} from "reselect";
import {AppStateType} from "../store";

const getAdminInfo = (state: AppStateType) => {
    return state.adminReducer;
};

export const getAdminIsAuth = createSelector(getAdminInfo,
    (adminInfo) => {
        return adminInfo.adminIsAuth;
    });

export const getAdminId = createSelector(getAdminInfo,
    (adminInfo) => {
        return adminInfo.adminId;
    });

export const isAdding = createSelector(getAdminInfo,
    (adminInfo) => {
        return adminInfo.isAdding;
    });

export const getErrorAddMessage = createSelector(getAdminInfo,
    (adminInfo) => {
        return adminInfo.errorAddMessage;
    });

export const isSuccessAdd = createSelector(getAdminInfo,
    (adminInfo) => {
        return adminInfo.isSuccessAdd;
    });

export const getTimetablesData = createSelector(getAdminInfo,
    (adminInfo) => {
        return adminInfo.timeTables;
    });

export const isAdminPageLoading = createSelector(getAdminInfo,
    (adminInfo) => {
        return adminInfo.isAdminPageLoading;
    });
