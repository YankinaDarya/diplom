import {SET_STUDENT_TIMETABLE, START_LOADING_STUDENT_TIMETABLE_PAGE_ACTION, STOP_LOADING_STUDENT_TIMETABLE_PAGE_ACTION} from "./actions";

const initialState = {
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
    isStudentTimetableLoading: false,
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const studentTimetableReducer = (state = initialState,
                                        { type, payload }: ActionsType,)=> {
    switch (type) {
        case SET_STUDENT_TIMETABLE: {
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
        case START_LOADING_STUDENT_TIMETABLE_PAGE_ACTION: {
            return {
                ...state,
                isStudentTimetableLoading: true,
            };
        }
        case STOP_LOADING_STUDENT_TIMETABLE_PAGE_ACTION: {
            return {
                ...state,
                isStudentTimetableLoading: false,
            };
        }
        default:
            return state;
    }
};

