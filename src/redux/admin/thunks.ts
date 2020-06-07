import {NewUserType} from "./types";
import {
    setErrorAddAction,
    setStartAddingAction, setStartAdminPageLoadingAction,
    setStopAddingAction, setStopAdminPageLoadingAction,
    setSuccessAddAction, setTimetablesAction
} from "./actions";
import {adminAPI} from "../../api/admin";
import { emptyTimetable } from "./consts";

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

export const getTimetablesThunk = (): any =>
    (dispatch) => {
        dispatch(setStartAdminPageLoadingAction());
        adminAPI.getTimetables()
            .then((response => {
                if (response) {
                    for(let i = 0; i < response.length; i++) {
                        const tmpArr = [...emptyTimetable];
                        response[i].schedule.forEach((lesson) => {
                            tmpArr[lesson.time - 1][lesson.day_cd] = {
                                name: lesson.name,
                                isLecture: lesson.islecture,
                                isSeminar: lesson.isseminar,
                                place: lesson.place,
                                courseId: lesson.course_id
                            };
                        });
                        // @ts-ignore
                        dispatch(setTimetablesAction({timetable: tmpArr, lecId: response[i].lec_id, name: response[i].name}));
                    }

                }
                dispatch(setStopAdminPageLoadingAction());
            }))
    };

export const approveTimetableThunk = (id: number): any =>
    (dispatch) => {
        adminAPI.approveTimetable(id)
            .then((response => {
                if (response === "OK") {
                    dispatch(getTimetablesThunk());
                }
            }))
    };

export const rejectTimetableThunk = ({id, comment}): any =>
    (dispatch) => {
        adminAPI.rejectTimetable(id, comment)
            .then((response => {
                if (response === "OK") {
                    dispatch(getTimetablesThunk());
                }
            }))
    };
