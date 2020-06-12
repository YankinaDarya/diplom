import React from 'react';
import styles from './index.module.scss';
import {CourseType} from '../../../../redux/Teacher/TeacherCoursesReducer';
import classNames from "classnames/bind";
import {Schedule} from "./_components/schedule";
import {Button} from "@material-ui/core";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Course-block';

type PropsType = {
    course: CourseType;
    enroll: any;
    studentId: number;
};

const AllCoursesItem = ({course, enroll, studentId}: PropsType) => {
    const {id, name, imgurl, info, teacher, schedule} = course;
    const enrollCourse = () => {
        enroll(id, studentId);
    };
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h2 className={cn(`${COMPONENT_STYLE_NAME}__title`)}>{name}</h2>
            <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                {/*<img src={imgurl} alt="web"
                     className={cn(`${COMPONENT_STYLE_NAME}__image`)} />*/}
                <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                        <i>Информация о курсе:</i>
                        <span className={cn(`${COMPONENT_STYLE_NAME}__text`)}>
                            {info}
                        </span>
                    </div>
                    {Boolean(schedule) && Boolean(schedule.length) && (
                        <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                            <i>Время и место проведения:</i>
                            <span className={cn(`${COMPONENT_STYLE_NAME}__text`)}>
                            {schedule.map((item) => <Schedule {...item}/>)}
                        </span>
                        </div>
                    )}
                    <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                        <i>Лектор:</i>
                        <span className={cn(`${COMPONENT_STYLE_NAME}__text`)}> {teacher} </span>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            onClick={enrollCourse}
                        >
                            Записаться
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCoursesItem;
