import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Course.module.scss';
import { CourseType } from '../../../../redux/Teacher/TeacherCoursesReducer';
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Course-block';

type PropsType = {
    course: CourseType;
};

const Course = ({course}: PropsType): JSX.Element => {
    const {id, name, imgUrl, info, time, place, teacher} = course;
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h2 className={cn(`${COMPONENT_STYLE_NAME}__title`)}>{name}</h2>
            <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                <img src={imgUrl} alt="web"
                     className={cn(`${COMPONENT_STYLE_NAME}__image`)} />
                <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                        <i>Информация о курсе:</i>
                        <span className={cn(`${COMPONENT_STYLE_NAME}__text`)}>
                            {info}
                        </span>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                        <i>Время и место проведения:</i>
                        <span className={cn(`${COMPONENT_STYLE_NAME}__text`)}>
                            {place}, {time}
                        </span>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                        <i>Лектор:</i>
                        <span className={cn(`${COMPONENT_STYLE_NAME}__text`)}> {teacher} </span>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                        <Link to={`/course/${id}`}>Подробнее</Link> </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
