import React from 'react';
import style from './CoursePage.module.css';
import web from '../../../images/web.jpg';
import Accordion from "../../Common/Accordion/Accordion";
import StudentsTable from "./StudentsTable/StudentsTable";

const CoursePage = () => {
    return (
        <div className={style.cabinetWrapper}>
            <h1 className={style.h1}>
                Вэб-разработка
            </h1>
            <div className={style.dataBlock}>
                <img src={web} alt="web" className={style.img}/>
                <div className={style.info}>
                    <div className={style.item}><h4>Информация о курсе:</h4> В первой четверти вы углубитесь в верстку на
                        HTML/CSS и приступите к изучению JavaScript: познакомитесь с основами
                        языка, операторами, циклами, массивами и объектами, научитесь работать
                        с браузерными событиями: кликом мышки, прокруткой, отправкой формы.
                        На продвинутом курсе продолжите погружение в язык, познакомитесь с
                        объектно-ориентированным программированием, тестированием и
                        фреймворком Vue.js.</div>
                    <div className={style.item}><h4>Время и место проведения:</h4> Тимирязевская, 9643 ауд. четверг, 15.30 </div>
                    <div className={style.item}><h4>Лектор:</h4> Иван Иванович Иванов </div>
                    <div className={style.item}><h4>План занятий:</h4> <Accordion /></div>
                    <div className={style.item}><h4>Список студентов:</h4>
                        <StudentsTable />
                    </div>
                </div>
            </div>
            <h2>Объявления:</h2>
            <div className={style.dataBlock}>
                <div className={style.info}>
                <div className={style.item}>В этот четверг занятия отменяются по причине болезни преподавателя</div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
