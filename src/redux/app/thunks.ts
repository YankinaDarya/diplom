import {setStudentIsAuth} from "../student/cabinet-module/actions";
import {setAdminIsAuthAction} from "../admin/actions";
import { getAuthInfoThunk } from "../auth/thunks";
import {setTeacherIsAuth} from "../Teacher/actions";
import {setInitializedSuccessAction, setIsAppStartLoading, setIsAppStopLoading} from "./actions";

export const initializeAppThunk = () => (dispatch) => {
    dispatch(setIsAppStartLoading());
    dispatch(setStudentIsAuth(false));
    dispatch(setTeacherIsAuth(false));
    dispatch(setAdminIsAuthAction(false));
    let promise = dispatch(getAuthInfoThunk());
    Promise.all([promise])
        .then(() => {
            dispatch(setIsAppStopLoading());
        });
    /*dispatch(setIsAppStopLoading());*/
};
