import React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import styles from './CoursePage.module.scss';
import Accordion from "../../Common/Accordion/Accordion";
import StudentsTable from "./StudentsTable/StudentsTable";
import {CourseType, sendNotificationAction} from "../../../redux/Teacher/TeacherCoursesReducer";
import { TextField } from 'final-form-material-ui';
import {Form, Field} from "react-final-form";
import {Button} from "@material-ui/core";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Сourse-page';

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
                const onMySubmit = (values) => {
                    if(this.props.sendNotificationAction !== undefined) {
                        this.props.sendNotificationAction(values, courseId);
                    }
                };
                return (
                    <div className={cn(COMPONENT_STYLE_NAME)}>
                        <h1 className={cn(`${COMPONENT_STYLE_NAME}__h1`)}>
                            {name}
                        </h1>
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
                                    <Accordion plan={plan}/>
                                </div>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Список студентов:</h4>
                                    <StudentsTable students={students}/>
                                </div>
                            </div>
                        </div>
                        <h2 className={cn(`${COMPONENT_STYLE_NAME}__title`)}>Объявления:</h2>
                        {notifications.map(item => <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>{item}</div>
                            </div>
                        </div>)}
                        <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                            <Form
                                onSubmit={onMySubmit}
                                render={({handleSubmit, submitting, pristine, values}) => (
                                    <form onSubmit={handleSubmit} noValidate>
                                        <Field
                                            fullWidth
                                            name="notification"
                                            component={TextField}
                                            type="text"
                                            rows={6}
                                            label="Введите объявление"
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
                );
            }
        }
    }
}


const mapStateToProps = (state: any, ownProps: RouteComponentProps<RouterProps>): PropsType => ({
    courses: state.teacherCoursesReducer.courses,
    id: ownProps.match.params.id,
});

export default connect(mapStateToProps, {sendNotificationAction})(CoursePageView);
