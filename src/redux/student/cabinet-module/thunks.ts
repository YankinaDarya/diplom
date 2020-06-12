import { studentAPI } from "../../../api/student";
import {setNewStudentData, setStartStudentPageLoading, setStopStudentPageLoading, setStudentData} from "./actions";

export const updateStudentInfoThunk = (id: number, payload: any): any =>
    (dispatch) => {
        studentAPI.updateInfo(id, payload).then((response => {
            if (response === "OK") {
                dispatch(setNewStudentData(payload));
            }
        }))
    };

export const getStudentAllInfoThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartStudentPageLoading());
        studentAPI.getAllInfo(id).then((response => {
            if (response) {
                dispatch(setStudentData(response));
                dispatch(setStopStudentPageLoading());
            }
        }));
    };

export const getStudentCoursesThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStartStudentPageLoading());
        studentAPI.getAllInfo(id).then((response => {
            if (response) {
                dispatch(setStudentData(response));
                dispatch(setStopStudentPageLoading());
            }
        }));
    };
