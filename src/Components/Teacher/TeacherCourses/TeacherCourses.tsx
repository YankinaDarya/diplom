import React, {FC} from 'react';
import style from './TeacherCourses.module.css';
import Course from "./Course/Course";

type PropsType = {};

const TeacherCourses: FC<PropsType> = () => {
    return (
        <div className={style.cabinetWrapper}>
            <h1 className={style.h1}>
                Мои курсы
            </h1>
            <Course />
        </div>
    );
};

export default TeacherCourses;
