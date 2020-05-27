import {createSelector} from "reselect";
import {AppStateType} from "../store";

const getStudentInfo = (state: AppStateType) => {
    return state.appReducer;
};

export const getAppInitialized = createSelector(getStudentInfo,
    (appInfo) => {
        return appInfo.appInitialized;
    });
