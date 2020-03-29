import { Action } from "../../types/types";

const UPDATE_TIMETABLE = 'UPDATE_TIMETABLE';

type Plan = {
    content: string;
    abstract: any;
    homework: string;
}

type Students = {
    firstName: string;
    secondName: string;
    group: number;
}

type CourseType = {
    name: string;
    imgUrl: string;
    info: string;
    time: string;
    place: string;
    teacher: string;
    plan: Plan;
    students: Array<Students>;
    notifications: Array<string>;
}

type StateType = {
    courses: Array<CourseType>
};

const initialState = {
    courses: []
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const teacherTimetableReducer = (state = initialState,
                                        { type, payload }: ActionsType,)=> {
    switch (type) {

        default:
            return state;
    }
};

export const updateTimeTableAction:  Action<any> = (payload) => ({
    type: UPDATE_TIMETABLE,
    payload,
});

