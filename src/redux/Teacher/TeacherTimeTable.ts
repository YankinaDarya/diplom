import { TimetableWeek, Action } from "../../types/types";

const UPDATE_TIMETABLE = 'UPDATE_TIMETABLE';

type StateType = {
    timeTableData: Array<TimetableWeek>
};

const initialState = {
    timeTableData: [
        {
            monday: {name: 'матан', isLecture: false, isSeminar: true, },
            tuesday: {name: 'аналит', isLecture: true, isSeminar: false, },
            wednesday: {name: '', isLecture: false, isSeminar: false, },
            thursday: {name: 'диффуры', isLecture: false, isSeminar: true, },
            friday: {name: '', isLecture: false, isSeminar: false, },
            saturday: {name: '', isLecture: false, isSeminar: false, },
            sunday: {name: '', isLecture: false, isSeminar: false, },
        },
        {
            monday: {name: '', isLecture: false, isSeminar: false, },
            tuesday: {name: 'аналит', isLecture: true, isSeminar: false, },
            wednesday: {name: '', isLecture: false, isSeminar: false, },
            thursday: {name: 'физика', isLecture: false, isSeminar: true, },
            friday: {name: '', isLecture: false, isSeminar: false, },
            saturday: {name: '', isLecture: false, isSeminar: false, },
            sunday: {name: '', isLecture: false, isSeminar: false, },
        },
        {
            monday: {name: 'матан', isLecture: false, isSeminar: true, },
            tuesday: {name: 'аналит', isLecture: true, isSeminar: false, },
            wednesday: {name: '', isLecture: false, isSeminar: false, },
            thursday: {name: 'физика', isLecture: false, isSeminar: true, },
            friday: {name: '', isLecture: false, isSeminar: false, },
            saturday: {name: '', isLecture: false, isSeminar: false, },
            sunday: {name: '', isLecture: false, isSeminar: false, },
        },
        {
            monday: {name: 'матан', isLecture: false, isSeminar: true, },
            tuesday: {name: 'аналит', isLecture: true, isSeminar: false, },
            wednesday: {name: '', isLecture: false, isSeminar: false, },
            thursday: {name: 'физика', isLecture: false, isSeminar: true, },
            friday: {name: '', isLecture: false, isSeminar: false, },
            saturday: {name: '', isLecture: false, isSeminar: false, },
            sunday: {name: '', isLecture: false, isSeminar: false, },
        },
        {
            monday: {name: 'матан', isLecture: false, isSeminar: true, },
            tuesday: {name: 'аналит', isLecture: true, isSeminar: false, },
            wednesday: {name: '', isLecture: false, isSeminar: false, },
            thursday: {name: 'физика', isLecture: false, isSeminar: true, },
            friday: {name: '', isLecture: false, isSeminar: false, },
            saturday: {name: '', isLecture: false, isSeminar: false, },
            sunday: {name: '', isLecture: false, isSeminar: false, },
        },
        {
            monday: {name: 'матан', isLecture: false, isSeminar: true, },
            tuesday: {name: 'аналит', isLecture: true, isSeminar: false, },
            wednesday: {name: '', isLecture: false, isSeminar: false, },
            thursday: {name: 'физика', isLecture: false, isSeminar: true, },
            friday: {name: '', isLecture: false, isSeminar: false, },
            saturday: {name: '', isLecture: false, isSeminar: false, },
            sunday: {name: '', isLecture: false, isSeminar: false, },
        },
        {
            monday: {name: 'матан', isLecture: false, isSeminar: true, },
            tuesday: {name: 'аналит', isLecture: true, isSeminar: false, },
            wednesday: {name: '', isLecture: false, isSeminar: false, },
            thursday: {name: 'физика', isLecture: false, isSeminar: true, },
            friday: {name: '', isLecture: false, isSeminar: false, },
            saturday: {name: '', isLecture: false, isSeminar: false, },
            sunday: {name: '', isLecture: false, isSeminar: false, },
        },
    ]
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
            tmpArr[payload.lessonNumber - 1][payload.day] = {name: payload.lessonName,
                isLecture: payload.isLecture, isSeminar: payload.isSeminar, };
            debugger;
            return {
                ...state,
                timeTableData: [...state.timeTableData]
            }
        }
        default:
            return state;
    }
};

export const updateTimeTableAction:  Action<any> = (payload) => ({
    type: UPDATE_TIMETABLE,
    payload,
});

