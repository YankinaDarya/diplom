import {
    SEND_QUESTION,
    START_CREATING_NEW_COURSE_ACTION,
    STOP_CREATING_NEW_COURSE_ACTION,
    SET_SUCCESS_CREAT_COURSE_ACTION,
    SET_ERROR_CREAT_COURSE_ACTION,
    SET_STUDENT_COURSES, SET_ALL_COURSES, SET_STUDENT_HOMEWORKS
} from "./actions";

export type HomeworkType = {
    comment: string;
    hw_url: string;
    mark: number;
    week_num: number;
};

export type StudentCourseType = {
    id: number;
    name: string;
    imgUrl: string;
    info: string;
    time: string;
    place: string;
    teacher: string;

}

type StateType = {
    studentCourses: Array<StudentCourseType>
    errorAddMessage: '',
    isSuccessAdd: false,
    isAdding: false,
};

const initialState = {
    studentCourses: [],
    allCourses: [],
    avgMark: 0,
    hw: [],
    errorCreateCourseMessage: '',
    isSuccessCreateNewCourse: false,
    isCreating: false,
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const coursesReducer = (state = initialState,
                                      {type, payload}: ActionsType,) => {
    switch (type) {
        case SEND_QUESTION:
            return {
                ...state
            };
        case START_CREATING_NEW_COURSE_ACTION:
            return {
                ...state, isCreating: true,
            };
        case STOP_CREATING_NEW_COURSE_ACTION:
            return {
                ...state, isCreating: false,
            };
        case SET_SUCCESS_CREAT_COURSE_ACTION:
            return {
            ...state, isSuccessCreateNewCourse: payload,
        };
        case SET_ERROR_CREAT_COURSE_ACTION:
            return {
                ...state, errorCreateCourseMessage: payload,
            };
        case SET_STUDENT_COURSES:
            return {
                ...state, studentCourses: payload,
            };
        case SET_ALL_COURSES:
            return {
                ...state, allCourses: payload,
            };
        case SET_STUDENT_HOMEWORKS:
            return {
              ...state, hw: payload.hw,
                avgMark: payload.avg_mark,
            };
        default:
            return state;
    }
};
