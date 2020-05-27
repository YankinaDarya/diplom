import React from 'react';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import {Button, Grid} from "@material-ui/core";
import classNames from "classnames/bind";
import styles from "./teacher-login-form.module.scss";
import {AccountCircle} from "@material-ui/icons";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {connect} from "react-redux";
import {loginThunk} from "../../../../../redux/auth/thunks";
import { loginType } from '../../../../../redux/auth/types';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Student-login';

type PropsType = {
    loginTeacher: ({login, password}: loginType) => void;
};

export const TeacherLoginFormView = ({loginTeacher}: PropsType) => {
    const authorizeTeacher = (values) => {
        loginTeacher(values);
    };
    return(
        <div className={cn(COMPONENT_STYLE_NAME)}>
        <Form
            onSubmit={authorizeTeacher}
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
                                    <Field
                                        name="login"
                                        component={TextField}
                                        type="text"
                                        label="Логин"
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
                                    <Field
                                        name="password"
                                        component={TextField}
                                        type="password"
                                        label="Пароль"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__submit-button`)}
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

export const TeacherLoginForm = connect(null, {loginTeacher: loginThunk})(TeacherLoginFormView);
