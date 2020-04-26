import React from 'react';
import style from './Accordion.module.css';
import {Plan} from '../../../redux/Teacher/TeacherCoursesReducer';

type PropsType = {
    plan: Array<Plan>;
};

const Accordion = ({plan}: PropsType): JSX.Element => {
    /*const {weekNumber, abstract, content, homework} = plan;*/
    const accordeonItems = plan.map(({weekNumber, abstract, content, homework}) =>
        <div><input id={`ac-${weekNumber}`} name={`accordion-${weekNumber}`} type="checkbox"/>
            <label htmlFor={`ac-${weekNumber}`}>Неделя {weekNumber}</label>
            <article>
                <div>Содержание: {content}</div>
                <div>Конспект:
                    {abstract}
                </div>
                <div>Домашнее задание:
                    {homework}
                </div>
            </article>
        </div>
    );
    debugger;
    return (
        <section className={style.acContainer}>
            {accordeonItems}
        </section>
    );
};

export default Accordion;
