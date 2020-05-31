import React from 'react';
import style from './Accordion.module.css';
import {Plan} from '../../../redux/Teacher/TeacherCoursesReducer';

type PropsType = {
    plan: Array<Plan>;
};

const Accordion = ({plan}: PropsType): JSX.Element => {
    const accordeonItems = plan.map(({week_num, abstract, content_link, homework, is_hw}) =>
        <div><input id={`ac-${week_num}`} name={`accordion-${week_num}`} type="checkbox"/>
            <label htmlFor={`ac-${week_num}`}>Неделя {week_num}</label>
            <article>
                <div>Содержание: {content_link}</div>
                <div>Конспект:
                    {abstract}
                </div>
                <div>Домашнее задание:
                    {is_hw? homework: 'Нет задания'}
                </div>
            </article>
        </div>
    );
    return (
        <section className={style.acContainer}>
            {accordeonItems}
        </section>
    );
};

export default Accordion;
