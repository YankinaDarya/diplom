import React from 'react';
import style from './students-accordion.module.scss';

type PropsType = {
    plan: any;
};

export const StudentsAccordion = ({plan}: PropsType): JSX.Element => {
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
                <div>Дедлайн:
                    toDo
                </div>
                <div>Статус:
                    загружено
                </div>
                <div>Оценка:
                </div>
                <div>Комментарий:
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
