import React from 'react';
import style from './Accordion.module.css';
import {Link} from "react-router-dom";

const Accordion = () => {
    return (
        <section className={style.acContainer}>
            <div>
                <input id="ac-1" name="accordion-1" type="checkbox"/>
                <label htmlFor="ac-1">Неделя 1</label>
                <article>
                    <div>Содержание: изучение основ html, css, javascript</div>
                    <div>Конспект: <Link to='/courses/web/week1'>
                        Конспект</Link>
                    </div>
                    <div>Домашнее задание:
                        Создать свою вэб-страницу на html и css</div>
                </article>
            </div>
            <div>
                <input id="ac-2" name="accordion-1" type="checkbox"/>
                <label htmlFor="ac-2">Неделя 2</label>
                <article>
                    <p>Какой нибудь замечательный текст...</p>
                </article>
            </div>
            <div>
                <input id="ac-3" name="accordion-1" type="checkbox"/>
                <label htmlFor="ac-3">Неделя 3</label>
                <article>
                    <p>Какой нибудь замечательный текст...</p>
                </article>
            </div>
            <div>
                <input id="ac-4" name="accordion-1" type="checkbox"/>
                <label htmlFor="ac-4">Неделя 4</label>
                <article>
                    <p>Какой нибудь замечательный текст...</p>
                </article>
            </div>
            <div>
                <input id="ac-5" name="accordion-1" type="checkbox"/>
                <label htmlFor="ac-5">Неделя 5</label>
                <article>
                    <p>Какой нибудь замечательный текст...</p>
                </article>
            </div>
            <div>
                <input id="ac-6" name="accordion-1" type="checkbox"/>
                <label htmlFor="ac-6">Неделя 6</label>
                <article>
                    <p>Какой нибудь замечательный текст...</p>
                </article>
            </div>
        </section>
);
};

export default Accordion;