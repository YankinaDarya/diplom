import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styles from './student-courses.module.scss';
import StudentCourse from './сourse/student-сourse';
import {AppStateType} from "../../../redux/store";
import classNames from "classnames/bind";
import {NavLink} from "react-router-dom";
import { getStudentCourses } from '../../../redux/student/courses-module/selectors';
import { getALLStudentCoursesThunk } from '../../../redux/student/courses-module/thunks';
import {getStudentPageLoading} from "../../../redux/student/cabinet-module/selectors";
import {Preloader} from "../../Common/Preloader";
import { CourseType } from '../../../redux/Teacher/TeacherCoursesReducer';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Student-сourses';

type PropsType = {
    studentCourses: Array<CourseType>;
    isLoading: boolean;
    getALLStudentCourses: any;
};

const StudentCoursesView = ({studentCourses, isLoading, getALLStudentCourses}: PropsType) => {
    useEffect(() => getALLStudentCourses, []);
    if(isLoading) {
        return <Preloader />
    }
    const renderCourses = studentCourses.map(
        (course, index) => <StudentCourse course={course} key={index}/>);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__header-container`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__my-courses`)}>Мои курсы</div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__link`)}>
                    <NavLink to="/all/courses">
                        Все курсы
                    </NavLink>
                </div>
            </div>
            {renderCourses}
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    studentCourses: getStudentCourses(state),
    isLoading: getStudentPageLoading(state),
});

export const StudentCourses = connect(mapStateToProps, {getALLStudentCourses: getALLStudentCoursesThunk})(StudentCoursesView);
