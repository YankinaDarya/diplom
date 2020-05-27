import {NewUserType} from "./types";
import {
    setErrorAddAction,
    setStartAddingAction,
    setStopAddingAction,
    setSuccessAddAction
} from "./actions";
import {adminAPI} from "../../api/admin";

export const addNewUserThunk = ({login, password, role}: NewUserType): any =>
    (dispatch) => {
    dispatch(setStartAddingAction());
        adminAPI.addUser(login, password, role)
            .then((response => {
                if (response.result === "OK") {
                    dispatch(setSuccessAddAction(true));
                    dispatch(setSuccessAddAction(false));
                }
                else {
                    dispatch(setErrorAddAction(`${response.result}`));
                }
                dispatch(setStopAddingAction());
            }))
    };
