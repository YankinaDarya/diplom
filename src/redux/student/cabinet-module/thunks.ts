/*import {loginStudent, getStudentInfo} from "../../../api/student";
import { studentLoginType } from "./types";

export const getStudentInfoThunk = (): any =>
    (dispatch) => {
        getStudentInfo()
            .then((response => {
                if (response === null) {
                }
            }))
    };

export const studentLoginThunk = ({login, password}: studentLoginType): any =>
    (dispatch) => {
        loginStudent(login, password)
            .then((response => {
                if (response === null) {
                    getStudentInfoThunk();
                }
            }))
    };*/

import { studentAPI } from "../../../api/student";
import {studentLoginType} from "./types";
import {setStudentIdAction, setStudentIsAuth} from "./actions";

export const getStudentInfoThunk = (): any =>
    (dispatch) => {
        studentAPI.getStudentInfo().then((response => {
            if (response.data) {
                dispatch(setStudentIdAction(response.data[0].id));
                dispatch(setStudentIsAuth(true));
            }
        }))
    };

export const studentLoginThunk = ({login, password}: studentLoginType): any =>
    (dispatch) => {
        studentAPI.login(login, password)
            .then((response => {
                if (response === "OK") {
                    dispatch(getStudentInfoThunk());
                }
            }))
    };
