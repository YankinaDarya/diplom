import {Action} from "../../types/types";

const SEND_NOTIFICATION = 'SEND_NOTIFICATION';

export type Plan = {
    weekNumber: number;
    content: string;
    abstract: any;
    homework: any;
}

export type StudentsHomework = {
    file: any;
    mark: number;
    comment: string;
}

export type Students = {
    id: number;
    firstName: string;
    secondName: string;
    group: number;
    homeworks: Array<StudentsHomework>;
}

export type CourseType = {
    id: number;
    name: string;
    imgUrl: string;
    info: string;
    time: string;
    place: string;
    teacher: string;
    plan: Array<Plan>;
    students: Array<Students>;
    notifications: Array<string>;
}

type StateType = {
    courses: Array<CourseType>
};

const initialState = {
    courses: [
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
            plan: [
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
                },
                {
                    weekNumber: 5,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 6,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 7,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 8,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 9,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 10,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 11,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 12,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 13,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    weekNumber: 14,
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
            ],
            students: [
                {
                    firstName: 'Иван',
                    secondName: 'Олегов',
                    group: '635',
                    homeworks: [
                        {
                            file: 'Дз_1',
                            mark: 5,
                            comment: 'OK'
                        },
                        {
                            file: 'Дз_2',
                            mark: 4,
                            comment: 'есть недочеты'
                        },
                    ]
                }
            ],
            notifications: ['В эту пятницу занятия не будет по причине болезни преподавателя'],
        },
        {
            id: 145,
            name: 'Kek-разработка',
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
            plan: [
                {
                    content: 'Основы html и css',
                    abstract: 'Лекция 6',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
                {
                    content: 'Основы html и css',
                    abstract: 'Лекция 1',
                    homework: 'Сверстать страницу на html и css',
                },
            ],
            students: [
                {
                    firstName: 'Иван',
                    secondName: 'Олегов',
                    group: '635',
                    homeworks: [
                        {
                            file: 'Дз_1',
                            mark: 5,
                            comment: 'OK'
                        },
                        {
                            file: 'Дз_2',
                            mark: 4,
                            comment: 'OK с минусом'
                        },
                    ]
                }
            ],
            notifications: ['В эту пятницу занятия не будет по причине болезни преподавателя'],
        }
    ]
};

type InitialState = typeof initialState;

type ActionsType = {
    type: string;
    payload?: any;
};

export const teacherCoursesReducer = (state = initialState,
                                        {type, payload}: ActionsType,) => {
    switch (type) {
        case SEND_NOTIFICATION:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const sendNotificationAction: Action<any> = (payload) => ({
    type: SEND_NOTIFICATION,
    payload,
});

