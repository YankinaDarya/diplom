import React from 'react';
import Button from '@material-ui/core/Button';
import style from './Header.module.scss';
import logo from '../../images/lms4.png';
import prep from '../../images/prep.jpg';
import { connect } from 'react-redux';
import {getTeacherId, getTeacherIsAuth} from '../../redux/Teacher/selectors/teacher-cabinet-selector';
import {getStudentId, getStudentIsAuth} from "../../redux/student/cabinet-module/selectors";
import {getAdminId, getAdminIsAuth} from "../../redux/admin/selectors";
import {logoutThunk} from "../../redux/auth/thunks";

type PropsType = {
    logout: (id: number) => void;
    teacherId: number;
    studentId: number;
    adminId: number;
    teacherIsAuth: boolean;
    studentIsAuth: boolean;
    adminIsAuth: boolean;
};

const HeaderView = ({logout, teacherId, studentId,
                        adminId, studentIsAuth,
                        teacherIsAuth, adminIsAuth}: PropsType) => {
    const resetAuthorization = () => {
        if(studentIsAuth) {
            logout(studentId);
        }
        else if(teacherIsAuth) {
            logout(teacherId);
        }
        else if(adminIsAuth) {
            logout(adminId);
        }
    };
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
        teacherId: getTeacherId(state),
        studentId: getStudentId(state),
        adminId: getAdminId(state),
        teacherIsAuth: getTeacherIsAuth(state),
        studentIsAuth: getStudentIsAuth(state),
        adminIsAuth: getAdminIsAuth(state),
    }
};

export const Header = connect(mapStateToProps, {logout: logoutThunk})(HeaderView);
