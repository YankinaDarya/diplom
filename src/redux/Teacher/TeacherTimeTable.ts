import { TimetableWeek, Action } from "../../types/types";
import {
    SET_TEACHER_TIMETABLE,
    START_LOADING_TEACHER_TIMETABLE_PAGE_ACTION,
    STOP_LOADING_TEACHER_TIMETABLE_PAGE_ACTION,
    UPDATE_TIMETABLE
} from "./actions";
import {emptyApprovedTimetableData, emptyTimetableData} from "./consts";

type StateType = {
    timeTableData: Array<TimetableWeek>
};

const initialState = {
    approvedTimetableData: [
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
    ],
    timeTableData: [
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            tuesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            wednesday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            thursday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            friday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            saturday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
            sunday: {name: '', isLecture: false, isSeminar: false, place: '', courseId: 0},
        },
    ],
    isTeacherTimetableLoading: false,
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const teacherTimetableReducer = (state = initialState,
                                        { type, payload }: ActionsType,)=> {
    switch (type) {
        case UPDATE_TIMETABLE: {
            const tmpArr = [...state.timeTableData];
            tmpArr[payload.lessonNumber - 1][payload.day] = {
                name: payload.lessonName,
                isLecture: payload.isLecture,
                isSeminar: payload.isSeminar,
                place: payload.place,
                courseId: payload.courseId
            };
            return {
                ...state,
                timeTableData: [...state.timeTableData]
            }
        }
        case SET_TEACHER_TIMETABLE: {
            const tmpArr = [...state.approvedTimetableData];
            tmpArr[payload.lessonNumber - 1][payload.day] = {
                name: payload.lessonName,
                isLecture: payload.isLecture,
                isSeminar: payload.isSeminar,
                place: payload.place,
                courseId: payload.courseId
            };
            return {
                ...state,
                approvedTimetableData: [...state.approvedTimetableData]
            }
        }
        case START_LOADING_TEACHER_TIMETABLE_PAGE_ACTION: {
            return {
                ...state,
                isTeacherTimetableLoading: true,
            };
        }
        case STOP_LOADING_TEACHER_TIMETABLE_PAGE_ACTION: {
            return {
                ...state,
                isTeacherTimetableLoading: false,
            };
        }
        default:
            return state;
    }
};

