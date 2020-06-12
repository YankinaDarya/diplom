import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import {AppStateType} from "../../../redux/store";
import classNames from "classnames/bind";
import {getStudentId, getStudentPageLoading} from "../../../redux/student/cabinet-module/selectors";
import {Preloader} from "../../Common/Preloader";
import { getAllCourses } from '../../../redux/student/courses-module/selectors';
import { getALLCoursesThunk, enrollCourseThunk } from '../../../redux/student/courses-module/thunks';
import AllCoursesItem from "./all-courses-item";
import {CourseType} from "../../../redux/Teacher/TeacherCoursesReducer";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'All-сourses';

type PropsType = {
    allCourses: Array<CourseType>;
    isLoading: boolean;
    getALLCourses: any;
    enroll: any;
    studentId: number;
};

const AllCoursesView = ({allCourses, isLoading, getALLCourses, enroll, studentId}: PropsType) => {
    useEffect(() => getALLCourses(studentId), []);
    if(isLoading) {
        return <Preloader />
    }
    const renderCourses = allCourses.map(
        (course, index) => <AllCoursesItem course={course} key={index} enroll={enroll}
                                           studentId={studentId} />);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__header-container`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__my-courses`)}>Все курсы</div>
            </div>
            {renderCourses}
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    allCourses: getAllCourses(state),
    isLoading: getStudentPageLoading(state),
    studentId: getStudentId(state),
});

export const AllCourses = connect(mapStateToProps, {getALLCourses: getALLCoursesThunk, enroll: enrollCourseThunk})(AllCoursesView);
