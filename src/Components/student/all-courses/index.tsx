import React from 'react';
import { connect } from 'react-redux';
/*import {getStudentAllCourses} from "../../../redux/student/courses-module/selectors";*/
import {AppStateType} from "../../../redux/store";
import { StudentCourseType } from '../../../redux/student/courses-module/reducer';
import classNames from "classnames/bind";


const COMPONENT_STYLE_NAME = 'Student-сourses';

type PropsType = {
    studentCourses: Array<StudentCourseType>;
};

const AllCoursesView = ({studentCourses}: PropsType) => {
    const renderCourses = studentCourses.map(
        (course, index) => <div>krk</div>/*<StudentCourse course={course}/>*/);
    return (
        <div></div>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        studentCourses: [],/*getStudentAllCourses(state),*/
    }
};

export const AllCourses = connect(mapStateToProps)(AllCoursesView);
