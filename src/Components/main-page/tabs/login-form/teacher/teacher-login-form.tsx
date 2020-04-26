import React from 'react';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import {Button, Grid} from "@material-ui/core";
import classNames from "classnames/bind";
import styles from "./teacher-login-form.module.scss";
import {AccountCircle} from "@material-ui/icons";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {connect} from "react-redux";
import {setTeacherIsAuth} from "../../../../../redux/Teacher/TeacherCabinetReducer";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Student-login';

type PropsType = {
    setTeacherIsAuth: any;
};

export const TeacherLoginFormView = ({setTeacherIsAuth}: PropsType) => {
    const authorizeTeacher = () => {
        setTeacherIsAuth(true);
    };
    return(
        <div className={cn(COMPONENT_STYLE_NAME)}>
        <Form
            onSubmit={() => {}}
            render={({handleSubmit, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} noValidate>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__header`)}>Вход</div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__field`)}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid"
                                               label="Логин"
                                               input={Field} meta=""
                                               name="teacherLogin"
                                    />
                                </Grid>
                            </Grid>
                        </div>

                        <div className={cn(`${COMPONENT_STYLE_NAME}__field`)}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <LockOpenIcon />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid"
                                               label="Пароль"
                                               type="password"
                                               input={Field} meta=""
                                               name="teacherPassword"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__submit-button`)}
                        onClick={authorizeTeacher}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                                disabled={submitting}
                            >
                                Войти
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        />
        <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
            В нашей системе Вы сможете составлять свое личное расписание и курсы,
            следить за успеваемостью студенотов, проверять домашние работы, ставить оценки,
            общаться со студентами.
        </div>
        </div>
    );
};

export const TeacherLoginForm = connect(null, {setTeacherIsAuth})(TeacherLoginFormView);
