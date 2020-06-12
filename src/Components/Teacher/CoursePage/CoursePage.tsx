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
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {getALLCourseInfoThunk} from "../../../redux/student/courses-module/thunks";
import {
    getCourseMainInfo, getTeacherCourseNotificationsInfo,
    getTeacherPlan,
    getTeacherStudentsInfo, isTeacherCoursePageLoading
} from "../../../redux/Teacher/selectors/teacher-course-selectors";
import {Schedule} from "../TeacherCourses/Course/_components/schedule";
import {sentNotificationThunk, updateWeekThunk} from "../../../redux/Teacher/thunks";
import {Preloader} from "../../Common/Preloader";
import {getTeacherPageLoading} from "../../../redux/Teacher/selectors/teacher-cabinet-selector";
import {getAvgMark, getHomeworks} from '../../../redux/student/courses-module/selectors';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Сourse-page';

type MapPropsType = {
    courseMainInfo: CourseType;
    plan: Array<Plan>;
    students: Array<Students>;
    notifications: Array<any>;
    isLoading: boolean;
    updateWeek: any;
    isTeacherPageLoading: boolean;
};

type MapDispatchType = {
    getCourseInfo: (id: number) => void;
    sentNotification: any;
};

type PathParamsType = {
    id: string
}
type PropsType = MapPropsType & RouteComponentProps<PathParamsType> & MapDispatchType;

class CoursePageView extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    sentNotif = (values) => {
        const courseId = this.props.match.params.id;
        this.props.sentNotification(courseId, {...values, course_id: courseId});
    };

    componentDidMount(): void {
        this.props.getCourseInfo(Number(this.props.match.params.id));
    }

    render() {
        const {courseMainInfo, plan, students, notifications, updateWeek, isTeacherPageLoading} = this.props;
        const {name, imgurl, info, schedule, teacher, id} = courseMainInfo;
        if(isTeacherPageLoading) {
            return <Preloader />
        }
        return (
            <div className={cn(COMPONENT_STYLE_NAME)}>
                <h1 className={cn(`${COMPONENT_STYLE_NAME}__h1`)}>
                    {name}
                </h1>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    {/*<img src={imgurl} alt="web" className={cn(`${COMPONENT_STYLE_NAME}__img`)}/>*/}
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
                            <Accordion plan={plan} updateWeek={updateWeek}/>
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Список студентов:</h4>
                            <StudentsTable students={students} courseId={id} />
                        </div>
                    </div>
                </div>
                <h2 className={cn(`${COMPONENT_STYLE_NAME}__title`)}>Объявления:</h2>
                {Boolean(notifications.length) &&
                notifications.map(item =>
                    <div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__notif-date`)}>
                            {item.ts}
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__notif-container`)}>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                                    <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                                        {item.notification}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
                <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                    <Form
                        onSubmit={this.sentNotif}
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
    isTeacherPageLoading: getTeacherPageLoading(state),
});

export default compose<React.ComponentType>(connect(mapStateToProps, {
    getCourseInfo: getALLCourseInfoThunk,
    updateWeek: updateWeekThunk, sentNotification: sentNotificationThunk
}), withRouter)(CoursePageView)
