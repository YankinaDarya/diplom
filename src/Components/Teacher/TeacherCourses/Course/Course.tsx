import React from 'react';
import {Link} from 'react-router-dom';
import style from './Course.module.css';
import web from '../../../../images/web.jpg';

const Course = () => {
    return (
        <div>
            <h2 className={style.h2}>Вэб-разработка</h2>
            <div className={style.dataBlock}>
                <img src={web} alt="web" className={style.img}/>
                <div className={style.info}>
                    <div className={style.item}><i>Информация о курсе:</i> В первой четверти вы углубитесь в верстку на
                        HTML/CSS и приступите к изучению JavaScript: познакомитесь с основами
                        языка, операторами, циклами, массивами и объектами, научитесь работать
                        с браузерными событиями: кликом мышки, прокруткой, отправкой формы.
                        На продвинутом курсе продолжите погружение в язык, познакомитесь с
                        объектно-ориентированным программированием, тестированием и
                        фреймворком Vue.js.</div>
                    <div className={style.item}><i>Время и место проведения:</i> Тимирязевская, 9643 ауд. четверг, 15.30 </div>
                    <div className={style.item}><i>Лектор:</i> Иван Иванович Иванов </div>
                    <div className={style.item}><Link to='/courses/web'>Подробнее</Link> </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
