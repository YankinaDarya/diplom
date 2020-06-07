import React, {useState} from 'react';
import style from './Accordion.module.css';
import {Plan} from '../../../redux/Teacher/TeacherCoursesReducer';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {TextField} from "final-form-material-ui";
import {Form, Field} from "react-final-form";
import { Button } from '@material-ui/core';

type PropsType = {
    plan: Array<Plan>;
    updateWeek: any;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const Accordion = ({plan, updateWeek}: PropsType) => {
    const classes = useStyles();
    const [isModalOpen, setOpen] = React.useState(false);
    const [courseId, setCourseId] = React.useState(0);
    const [weekNum, setWeekNum] = React.useState(0);
    const onSubmit = (values) => {
        updateWeek({
            course_id: courseId,
            week_num: weekNum,
            is_hw: Boolean(values.homework),
            ...values,
        }, courseId);
        handleClose();
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<>
            <section className={style.acContainer}>
                {plan.map(({week_num, abstract, content_link, homework, is_hw, course_id}) =>
                    <div>
                        <input id={`ac-${week_num}`} name={`accordion-${week_num}`} type="checkbox"/>
                        <label htmlFor={`ac-${week_num}`}>Неделя {week_num}</label>
                        <article>
                            <div onClick={() => {
                                handleOpen();
                                setCourseId(course_id);
                                setWeekNum(week_num);
                            }}>Добавить описание
                            </div>
                            <div>Содержание:
                                <span style={{marginLeft: '15px'}}>
                                    {content_link}
                                </span>
                            </div>
                            <div>Конспект:
                                <span style={{marginLeft: '15px'}}>
                                    <a href={abstract}>{abstract}</a>
                                    </span>
                            </div>
                            <div>Домашнее задание:
                                <span style={{marginLeft: '15px'}}>
                                {is_hw ? homework : 'Нет задания'}
                                </span>
                            </div>
                        </article>
                    </div>
                )}
            </section>
            {isModalOpen && (<Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isModalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <div className={classes.paper}>
                        <Form
                            onSubmit={onSubmit}
                            render={({handleSubmit, submitting, pristine, values}) => (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className={style.form}>
                                        <h1>{`Неделя ${weekNum}`}</h1>
                                        <div className={style.fieldContainer}>
                                            <Field
                                                label="Содержание"
                                                name="content_link"
                                                component={TextField}
                                                required={false}
                                                style={{width: '300px'}}
                                            />
                                        </div>
                                        <div className={style.fieldContainer}>
                                            <Field
                                                label="Конспект"
                                                name="abstract"
                                                component={TextField}
                                                required={false}
                                                style={{width: '300px'}}
                                            />
                                        </div>
                                        <div className={style.fieldContainer}>
                                            <Field
                                                label="Домашнее задание"
                                                name="homework"
                                                component={TextField}
                                                required={false}
                                                style={{width: '300px'}}
                                            />
                                        </div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                        >
                                            Отправить
                                        </Button>
                                    </div>
                                </form>
                            )}
                        />
                    </div>
                </Fade>
            </Modal>)}
        </>
    );
};

export default Accordion;
