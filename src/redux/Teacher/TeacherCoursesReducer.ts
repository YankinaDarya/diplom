import {
    SET_ALL_TEACHER_COURSES_ACTION,
    SET_COURSE_INFO_ACTION,
    SET_COURSE_NOTIFICATIONS_ACTION,
    SET_COURSE_PLAN_ACTION,
    SET_COURSE_STUDENTS_INFO_ACTION,
    START_LOADING_COURSE_PAGE_ACTION,
    STOP_LOADING_COURSE_PAGE_ACTION
} from "./actions";

export type Plan = {
    course_id: number;
    week_num: number;
    content_link: string;
    abstract: string;
    homework: string;
    is_hw: boolean;
}

export type HomeworkType = {
    comment: string | null;
    hw_url: string | null;
    mark: number | null;
    week_num: number | null;
};

export type Students = {
    student_id: number;
    group: string | null;
    lastname: string | null;
    midname: string | null;
    firstname: string | null;
    hw: Array<HomeworkType>
}

export type scheduleType = {
    day_cd: string;
    islecture: boolean;
    isseminar: boolean;
    place: string;
    time: number;
}

export type CourseType = {
    id: number;
    name: string;
    imgurl: string;
    info: string;
    schedule: Array<scheduleType>;
    teacher?: string;
}

type StateType = {
    courses: Array<CourseType>
};

const initialState = {
    courses: [],
    course: {
        id: 0,
        name: '',
        imgurl: '',
        info: '',
        schedule: [],
        teacher: '',
    },
    plan: [],
    students: [],
    notifications: [],
    isCoursePageLoading: false,
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const teacherCoursesReducer = (state = initialState,
                                        {type, payload}: ActionsType,) => {
    switch (type) {
        case SET_ALL_TEACHER_COURSES_ACTION:
            return {
                ...state, courses: payload,
            };
        case SET_COURSE_INFO_ACTION:
            return {
                ...state, course: {
                    id: payload.id,
                    name: payload.name,
                    imgurl: payload.imgurl,
                    info: payload.info,
                    schedule: payload.schedule ? payload.schedule : [],
                    teacher: `${payload.firstname} ${payload.midname} ${payload.lastname}`
                },
            };
        case SET_COURSE_PLAN_ACTION:
            return {
                ...state,
                plan: payload,
            };
        case SET_COURSE_STUDENTS_INFO_ACTION:
            return {
                ...state,
                students: payload,
            };
        case SET_COURSE_NOTIFICATIONS_ACTION:
            return {
                ...state,
                notifications: payload,
            };
        case START_LOADING_COURSE_PAGE_ACTION:
            return {
                ...state,
                isCoursePageLoading: true,
            };
        case STOP_LOADING_COURSE_PAGE_ACTION:
            return {
                ...state,
                isCoursePageLoading: false,
            };
        default:
            return state;
    }
};

