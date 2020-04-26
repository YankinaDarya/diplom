import {SEND_QUESTION} from "./actions";

export type Plan = {
    weekNumber: number;
    content: string;
    abstract: any;
    homework: any;
}

export type StudentCourseType = {
    id: number;
    name: string;
    imgUrl: string;
    info: string;
    time: string;
    place: string;
    teacher: string;
    /*plan: Array<Plan>;
    notifications: Array<string>;*/
}

type StateType = {
    studentCourses: Array<StudentCourseType>
};

const initialState = {
    studentCourses: [
        {
            id: 123,
            name: 'Вэб-разработка',
            imgUrl: 'https://www.g-m-group.com/images/2018/05/21/wd2016.jpg',
            info: 'В первой четверти вы углубитесь в верстку на HTML/CSS и приступите к изучению' +
                'JavaScript: познакомитесь с основами' +
                'языка, операторами, циклами, массивами и объектами, научитесь работать' +
                'с браузерными событиями: кликом мышки, прокруткой, отправкой формы.' +
                'На продвинутом курсе продолжите погружение в язык, познакомитесь с' +
                'объектно-ориентированным программированием, тестированием и' +
                'фреймворком Vue.js.',
            time: 'четверг, 15.30',
            place: 'Тимирязевская, 9643 ауд.',
            teacher: 'Иван Иванович Иванов',
            /*plan: [
                {   weekNumber: 1,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 2,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 3,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 4,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                }
            ],
            notifications: ['В эту пятницу занятия не будет по причине болезни преподавателя'],
        */},]
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const studentCoursesReducer = (state = initialState,
                                      {type, payload}: ActionsType,) => {
    switch (type) {
        case SEND_QUESTION:
            return {
                ...state
            };
        default:
            return state;
    }
};
