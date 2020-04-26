import React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import styles from './student-course-page.module.scss';
import {CourseType, sendNotificationAction} from "../../../redux/Teacher/TeacherCoursesReducer";
import classNames from "classnames/bind";
import { StudentsAccordion } from './students-accordion/students-accordion';
import {Button} from "@material-ui/core";
import { TextField } from 'final-form-material-ui';
import {Form, Field} from "react-final-form";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'student-сourse';

type ReduxType = {
    courses?: Array<CourseType>;
};

type MapDispatchToPropsType = {
    sendNotificationAction?: (values: string, courseId: number) => void;
};

type RouterProps = {
    id?: string;
};
type PropsType = ReduxType & RouterProps & MapDispatchToPropsType;

class CoursePageView extends React.PureComponent<PropsType, {}> {
    render() {
        const courseId = Number(this.props.id);
        if(this.props.courses !== undefined) {
            const courseInfo = this.props.courses.find(course => course.id === courseId);
            if (courseInfo !== undefined) {
                const {name, imgUrl, info, time, place, teacher, plan, students, notifications} = courseInfo;
                return (
                    <div className={cn(COMPONENT_STYLE_NAME)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__header-container`)}>
                            <h1 className={cn(`${COMPONENT_STYLE_NAME}__h1`)}>{name}</h1>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__mark`)}>Текущая оценка за курс: 4,76</div>
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                            <img src={imgUrl} alt="web" className={cn(`${COMPONENT_STYLE_NAME}__img`)}/>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Информация о курсе:</h4>
                                    {info}
                                </div>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Время и место
                                    проведения:</h4> {place},
                                    {time}
                                </div>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Лектор:</h4>
                                    {teacher}
                                </div>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                                    <h4>План занятий:</h4>
                                    <StudentsAccordion plan={plan}/>
                                </div>
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                            <Form
                                onSubmit={() => {}}
                                render={({handleSubmit, submitting, pristine, values}) => (
                                    <form onSubmit={handleSubmit} noValidate>
                                        <Field
                                            fullWidth
                                            name="question"
                                            component={TextField}
                                            type="text"
                                            rows={6}
                                            label="Задать вопрос преподавателю"
                                            id="outlined-multiline-static"
                                            multiline
                                            variant="outlined"
                                        />
                                        <div className={cn(`${COMPONENT_STYLE_NAME}__submit-button`)}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                type="submit"
                                                disabled={submitting}
                                            >
                                                Отправить
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            />
                            </div>
                        </div>
                        <h2>Объявления:</h2>
                        {notifications.map(item => <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>{item}</div>
                            </div>
                        </div>)}
                    </div>
                );
            }
        }
    }
}


const mapStateToProps = (state: any, ownProps: RouteComponentProps<RouterProps>): PropsType => ({
    courses: state.teacherCoursesReducer.courses,
    id: ownProps.match.params.id,
});

export const StudentCoursePage =  connect(mapStateToProps, {sendNotificationAction})(CoursePageView);
