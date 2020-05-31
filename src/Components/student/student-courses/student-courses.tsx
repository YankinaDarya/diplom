import React from 'react';
import { connect } from 'react-redux';
import styles from './student-courses.module.scss';
import StudentCourse from './сourse/student-сourse';
/*import {getStudentAllCourses} from "../../../redux/student/courses-module/selectors";*/
import {AppStateType} from "../../../redux/store";
import { StudentCourseType } from '../../../redux/student/courses-module/reducer';
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Student-сourses';

type PropsType = {
    studentCourses: Array<StudentCourseType>;
};

const StudentCoursesView = ({studentCourses}: PropsType) => {
    const renderCourses = studentCourses.map(
        (course, index) => <StudentCourse course={course}/>);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__header-container`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__my-courses`)}>Мои курсы</div>
                <a href="#" className={cn(`${COMPONENT_STYLE_NAME}__link`)}>Все курсы</a>
            </div>
            {renderCourses}
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        studentCourses: [],/*getStudentAllCourses(state),*/
    }
};

export const StudentCourses = connect(mapStateToProps)(StudentCoursesView);
