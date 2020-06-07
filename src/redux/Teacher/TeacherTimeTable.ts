import { TimetableWeek, Action } from "../../types/types";
import {
    SET_COPIED_APPROVED_TEACHER_TIMETABLE,
    SET_TEACHER_HAS_UNAPPROVED_TIMETABLE,
    SET_TEACHER_TIMETABLE,
    START_LOADING_TEACHER_TIMETABLE_PAGE_ACTION,
    STOP_LOADING_TEACHER_TIMETABLE_PAGE_ACTION,
    UPDATE_TIMETABLE
} from "./actions";

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
    copiedApprovedTimeTableData: [
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
    hasUnapprovedTimetable: false,
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
        case SET_COPIED_APPROVED_TEACHER_TIMETABLE: {
            const tmpArr = [...state.copiedApprovedTimeTableData];
            tmpArr[payload.lessonNumber - 1][payload.day] = {
                name: payload.lessonName,
                isLecture: payload.isLecture,
                isSeminar: payload.isSeminar,
                place: payload.place,
                courseId: payload.courseId
            };
            return {
                ...state,
                copiedApprovedTimeTableData: [...state.copiedApprovedTimeTableData]
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
        case SET_TEACHER_HAS_UNAPPROVED_TIMETABLE: {
            return {
                ...state,
                hasUnapprovedTimetable: payload,
            };
        }
        default:
            return state;
    }
};

