import React, {memo} from 'react';
import styles from './index.module.scss';
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Schedule';

type PropsType = {
    day_cd: string;
    islecture: boolean;
    isseminar: boolean;
    place: string;
    time: number;
};

const dayOfWeek = {
    0: 'Понедельник',
    1: 'Вторник',
    2: 'Среда',
    3: 'Четверг',
    4: 'Пятница',
    5: 'Суббота',
    6: 'Воскресенье',
};

const dayOfWeekEnglish = {
    'monday': 0,
    'tuesday': 1,
    'wednesday': 2,
    'thursday': 3,
    'friday': 4,
    'saturday': 5,
    'sunday': 6,
};

export const Schedule = memo(({day_cd, islecture, isseminar, place, time}: PropsType) => {
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            {Boolean(islecture) && `Лекция - ${dayOfWeek[dayOfWeekEnglish[day_cd]]} ${place} ${time} пара`}
            {Boolean(isseminar) && `Семинар - ${dayOfWeek[dayOfWeekEnglish[day_cd]]} ${place} ${time} пара`}
        </div>
    );
});
