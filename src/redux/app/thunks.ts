import {setStudentIsAuth} from "../student/cabinet-module/actions";
import {setAdminIsAuthAction} from "../admin/actions";
import { getAuthInfoThunk } from "../auth/thunks";
import { setTeacherIsAuth } from "../Teacher/actions";
import {setInitializedSuccessAction} from "./actions";

export const initializeAppThunk = () => (dispatch) => {
    dispatch(setStudentIsAuth(false));
    dispatch(setTeacherIsAuth(false));
    dispatch(setAdminIsAuthAction(false));
    let promise = dispatch(getAuthInfoThunk());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccessAction());
        });
};
