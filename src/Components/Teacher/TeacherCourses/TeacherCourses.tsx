import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './TeacherCourses.module.scss';
import Course from "./Course/Course";
import {CourseType} from "../../../redux/Teacher/TeacherCoursesReducer";
import classNames from "classnames/bind";
import {Link} from "react-router-dom";
import {getTeacherCoursesThunk} from "../../../redux/Teacher/thunks";
import {getTeacherId, getTeacherPageLoading} from "../../../redux/Teacher/selectors/teacher-cabinet-selector";
import {Preloader} from "../../Common/Preloader";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'All-courses-page';

type PropsType = {
    id: number;
    courses: Array<CourseType>;
    getCourses: (id: number) => void;
    isTeacherPageLoading: boolean;
};

const TeacherCoursesView = ({id, courses, getCourses, isTeacherPageLoading}: PropsType): JSX.Element => {
    useEffect(() => {getCourses(id)}, []);
    const renderCourses = courses.map(
        (course) => <Course course={course} />);
    if(isTeacherPageLoading) {
        return <Preloader />
    }
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__h1`)}>
                Мои курсы
            </h1>
            {renderCourses}
            <Link to='/new/course'>
            <div className={cn(`${COMPONENT_STYLE_NAME}__add-course-block`)}>
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                <div className={cn(`${COMPONENT_STYLE_NAME}__add-course-text`)}>Добавить новый курс</div>
            </div>
            </Link>
        </div>
    );
};

const mapStateToProps = (state) => ({
    courses: state.teacherCoursesReducer.courses,
    id: getTeacherId(state),
    isTeacherPageLoading: getTeacherPageLoading(state),
});

export default connect(mapStateToProps, {getCourses: getTeacherCoursesThunk})(TeacherCoursesView);
