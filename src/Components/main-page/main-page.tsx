import React from 'react';
import classNames from "classnames/bind";
import styles from './main-page.module.scss';
import lms4 from '../../images/lms5.png';
import {LoginTabs} from "./tabs/tabs";
import {getTeacherIsAuth} from "../../redux/Teacher/selectors/teacher-cabinet-selector";
import {getStudentIsAuth} from "../../redux/student/cabinet-module/selectors";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Main-page';

type PropsType = {
    teacherIsAuth: boolean;
    studentIsAuth: boolean;
};

export const MainPageView = ({teacherIsAuth, studentIsAuth}: PropsType) => {
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__content`)}>
                <img className={cn(`${COMPONENT_STYLE_NAME}__logo`)}
                    src={lms4} alt="logo"/>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__text`)}>
                        Добро пожаловать в нашу образовательную систему!
                    </div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__tabs-container`)}>
                    <LoginTabs />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        teacherIsAuth: getTeacherIsAuth(state),
        studentIsAuth: getStudentIsAuth(state),
    }
};

export const MainPage = connect(mapStateToProps)(MainPageView);

