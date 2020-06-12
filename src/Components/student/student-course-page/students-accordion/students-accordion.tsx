import React from 'react';
import style from './students-accordion.module.scss';
import {HomeworkType} from "../../../../redux/student/courses-module/reducer";
import { Plan } from '../../../../redux/Teacher/TeacherCoursesReducer';

type PropsType = {
    plan: Array<Plan>;
    hw: Array<HomeworkType>;
};

export const StudentsAccordion = ({plan, hw}: PropsType): JSX.Element => {
    const accordeonItems = plan.map(({week_num, abstract, content_link, homework}) => {
        const myHw = hw.find((item) => item.week_num === week_num);
        return (
                <div><input id={`ac-${week_num}`} name={`accordion-${week_num}`} type="checkbox"/>
                    <label htmlFor={`ac-${week_num}`}>{`Неделя ${week_num}`}</label>
                    <article>
                        <div>Содержание: {content_link}</div>
                        <div>Конспект:
                            {abstract}
                        </div>
                        <div>Домашнее задание:
                            {homework}
                        </div>
                        <div>
                            Ссылка на задание: {myHw && myHw.hw_url}
                        </div>
                        <div>Оценка: {myHw && myHw.mark}
                        </div>
                        <div>Комментарий от преподавателя: {myHw && myHw.comment}
                        </div>
                    </article>
                </div>)
        }
    );
    return (
        <section className={style.acContainer}>
            {accordeonItems}
        </section>
    );
};
