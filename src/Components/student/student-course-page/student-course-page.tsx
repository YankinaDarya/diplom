import React, {Component, ComponentType} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import styles from './student-course-page.module.scss';
import {CourseType, Plan, Students} from "../../../redux/Teacher/TeacherCoursesReducer";
import classNames from "classnames/bind";
import {StudentsAccordion} from './students-accordion/students-accordion';
import {Button} from "@material-ui/core";
import {TextField} from 'final-form-material-ui';
import {Form, Field} from "react-final-form";
import {
    getCourseMainInfo, getTeacherCourseNotificationsInfo,
    getTeacherPlan,
    getTeacherStudentsInfo, isTeacherCoursePageLoading
} from "../../../redux/Teacher/selectors/teacher-course-selectors";
import {getTeacherPageLoading} from "../../../redux/Teacher/selectors/teacher-cabinet-selector";
import {compose} from "redux";
import {getALLCourseInfoStudentThunk, sentHomeworkThunk, sentQuestionThunk} from "../../../redux/student/courses-module/thunks";
import {Preloader} from "../../Common/Preloader";
import {Schedule} from "../../Teacher/TeacherCourses/Course/_components/schedule";
import {getAvgMark, getHomeworks} from "../../../redux/student/courses-module/selectors";
import {HomeworkType} from "../../../redux/student/courses-module/reducer";
import {getStudentId} from "../../../redux/student/cabinet-module/selectors";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'student-сourse';

type MapPropsType = {
    courseMainInfo: CourseType;
    plan: Array<Plan>;
    students: Array<Students>;
    notifications: Array<any>;
    isLoading: boolean;
    updateWeek: any;
    isPageLoading: boolean;
    avgMark: number;
    hw: Array<HomeworkType>;
    studentId: number;
};

type MapDispatchType = {
    getCourseInfo: (id: number, studentId: number) => void;
    sentNotification: any;
    sentHomework: any;
    sentQuestion: any;
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
        console.log(this.props.match.params.id);
        this.props.getCourseInfo(Number(this.props.match.params.id), this.props.studentId);
    }

    render() {
        const {courseMainInfo, plan, notifications, isPageLoading, avgMark,
            hw, studentId, sentQuestion, sentHomework} = this.props;
        const {name, imgurl, info, schedule, teacher, id} = courseMainInfo;
        if (isPageLoading) {
            return <Preloader/>
        }
        return (
            <div className={cn(COMPONENT_STYLE_NAME)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__header-container`)}>
                    <h1 className={cn(`${COMPONENT_STYLE_NAME}__h1`)}>{name}</h1>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__mark`)}>Текущая оценка за курс: {avgMark}</div>
                </div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    {/*<img src={imgurl} alt="web" className={cn(`${COMPONENT_STYLE_NAME}__img`)}/>*/}
                    <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Информация о курсе:</h4>
                            {info}
                        </div>
                        {Boolean(schedule.length) && (
                            <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Время и место
                                проведения:</h4>
                                {schedule.map((item, index) => <Schedule {...item} key={index}/>)}
                            </div>
                        )}
                        <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}><h4>Лектор:</h4>
                            {teacher}
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                            <h4>План занятий:</h4>
                            <StudentsAccordion plan={plan} hw={hw}/>
                        </div>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__hw-container`)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__hw-label`)}>
                            Сдать домашнее задание
                        </div>
                        <Form
                            onSubmit={({week_num, hw_url}) => {
                                sentHomework(id, studentId, week_num, hw_url)
                            }}
                            render={({handleSubmit, submitting}) => (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                                        <Field
                                            fullWidth
                                            name="week_num"
                                            component={TextField}
                                            type="text"
                                            label="Номер недели"
                                            id="outlined-multiline-static"
                                        />
                                    </div>
                                    <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                                        <Field
                                            fullWidth
                                            name="hw_url"
                                            component={TextField}
                                            type="text"
                                            label="Ссылка на задание"
                                            id="outlined-multiline-static"
                                        />
                                    </div>
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
                    <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                        <Form
                            onSubmit={({notification}) => sentQuestion(notification, studentId, id)}
                            render={({handleSubmit, submitting}) => (
                                <form onSubmit={handleSubmit} noValidate>
                                    <Field
                                        fullWidth
                                        name="notification"
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
    isPageLoading: getTeacherPageLoading(state),
    avgMark: getAvgMark(state),
    hw: getHomeworks(state),
    studentId: getStudentId(state),
});

export default compose<ComponentType>(connect(mapStateToProps, {
    getCourseInfo: getALLCourseInfoStudentThunk,
    sentHomework: sentHomeworkThunk,
    sentQuestion: sentQuestionThunk,
}), withRouter)(CoursePageView)
