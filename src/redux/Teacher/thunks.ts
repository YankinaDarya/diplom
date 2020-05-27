import { teacherAPI } from "../../api/teacher";
import { setNewTeacherDataAction, setTeacherDataAction } from "./actions";

export const updateTeacherInfoThunk = (id: number, payload: any): any =>
    (dispatch) => {
        teacherAPI.updateInfo(id, payload).then((response => {
            if (response === "OK") {
                dispatch(setNewTeacherDataAction(payload));
            }
        }))
    };

export const getTeacherInfoThunk = (id: number): any =>
    (dispatch) => {
        teacherAPI.getInfo(id).then((response => {
            if (response) {
                dispatch(setTeacherDataAction(response));
            }
        }))
    };
