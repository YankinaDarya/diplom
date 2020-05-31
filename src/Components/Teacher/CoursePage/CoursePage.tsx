import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import styles from './CoursePage.module.scss';
import Accordion from "../../Common/Accordion/Accordion";
import StudentsTable from "./StudentsTable/StudentsTable";
import {CourseType, Plan, Students} from "../../../redux/Teacher/TeacherCoursesReducer";
import {TextField} from 'final-form-material-ui';
import {Form, Field} from "react-final-form";
import {Button} from "@material-ui/core";
import classNames from "classnames/bind";
import {sendNotificationAction} from "../../../redux/Teacher/actions";
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {getALLCourseInfoThunk} from "../../../redux/student/courses-module/thunks";
import {
    getCourseMainInfo, getTeacherCourseNotificationsInfo,
    getTeacherPlan,
    getTeacherStudentsInfo, isTeacherCoursePageLoading
} from "../../../redux/Teacher/selectors/teacher-course-selectors";
import {Schedule} from "../TeacherCourses/Course/_components/schedule";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Сourse-page';

type MapPropsType = {
    courseMainInfo: CourseType;
    plan: Array<Plan>;
    students: Array<Students>;
    notifications: Array<string>;
    isLoading: boolean;
};

type MapDispatchType = {
    getCourseInfo: (id: number) => void;
};

type PathParamsType = {
    id: string
}
type PropsType = MapPropsType & RouteComponentProps<PathParamsType> & MapDispatchType;

class CoursePageView extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getCourseInfo(Number(this.props.match.params.id));
    }

    render() {
        /*const courseId = Number(this.props.match.params.id);
        if(this.props.courses !== undefined) {
            const courseInfo = this.props.courses.find(course => course.id === courseId);
            if (courseInfo !== undefined) {
                const {name, imgurl, info, time, place, teacher, plan, students, notifications} = courseInfo;
                const onMySubmit = (values) => {
                    /!*if(this.props.sendNotificationAction !== undefined) {
                        this.props.sendNotificationAction(values, courseId);
                    }*!/
                };*/
        const {courseMainInfo, plan, students, notifications} = this.props;
        const {name, imgurl, info, schedule, teacher} = courseMainInfo;
        return (
            <div className={cn(COMPONENT_STYLE_NAME)}>
                <h1 className={cn(`${COMPONENT_STYLE_NAME}__h1`)}>
                    {name}
                </h1>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    <img src={imgurl} alt="web" className={cn(`${COMPONENT_STYLE_NAME}__img`)}/>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Информация о курсе:</h4>
                            {info}
                        </div>
                        {Boolean(schedule.length) && (
                            <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Время и место
                                проведения:</h4>
                                {schedule.map((item) => <Schedule {...item}/>)}
                            </div>
                        )}
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
                {Boolean(notifications.length) &&
                notifications.map(item => <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>{item}</div>
                    </div>
                </div>)
                }
                <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                    <Form
                        onSubmit={() => {}}
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


const mapStateToProps = (state) => ({
    courseMainInfo: getCourseMainInfo(state),
    plan: getTeacherPlan(state),
    students: getTeacherStudentsInfo(state),
    notifications: getTeacherCourseNotificationsInfo(state),
    isLoading: isTeacherCoursePageLoading(state),
});

export default compose<React.ComponentType>(connect(mapStateToProps, {getCourseInfo: getALLCourseInfoThunk}), withRouter)(CoursePageView)
