import React from 'react';
import Button from '@material-ui/core/Button';
import style from './Header.module.scss';
import logo from '../../images/lms4.png';
import prep from '../../images/prep.jpg';
import { connect } from 'react-redux';
import { getTeacherIsAuth } from '../../redux/Teacher/selectors/teacher-cabinet-selector';
import {setTeacherIsAuth} from "../../redux/Teacher/TeacherCabinetReducer";
import {getStudentIsAuth} from "../../redux/student/cabinet-module/selectors";
import {setStudentIsAuth} from "../../redux/student/cabinet-module/reducer";
import { Redirect } from 'react-router-dom';

type PropsType = {
    teacherIsAuth: boolean;
    studentIsAuth: boolean;
    setTeacherIsAuth: any;
    setStudentIsAuth: any;
};

const HeaderView = ({teacherIsAuth, studentIsAuth,
                        setStudentIsAuth, setTeacherIsAuth}: PropsType) => {
    const resetAuthorization = () => {
        setStudentIsAuth(false);
        setTeacherIsAuth(false);
    };
    if(!teacherIsAuth && !studentIsAuth) {
        return <Redirect to={"/"} />;
    }
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" className={style.logo}/>
            <div className={style.outBlock} onClick={resetAuthorization}>
                ИВАН
                <img src={prep} alt="prep" className={style.avatar}/>
                <Button variant="contained" color="primary">
                    Выход
                </Button>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        teacherIsAuth: getTeacherIsAuth(state),
        studentIsAuth: getStudentIsAuth(state),
    }
};

export const Header = connect(mapStateToProps, {setTeacherIsAuth, setStudentIsAuth})(HeaderView);
