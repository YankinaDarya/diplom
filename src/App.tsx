import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {Header} from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import style from './App.module.css';
import TeacherCourses from "./Components/Teacher/TeacherCourses/TeacherCourses";
import TeacherCabinet from './Components/Teacher/TeacherCabinet/TeacherCabinet';
import TeacherTimetable from "./Components/Teacher/TeacherTimetable/TeacherTimetable";
import CoursePage from "./Components/Teacher/CoursePage/CoursePage";
import {
    getTeacherIsAuth,
    getTeacherMessagesNumber,
    getTeacherNotificationsNumber
} from "./redux/Teacher/selectors/teacher-cabinet-selector";
import {connect} from 'react-redux';
import {
    getStudentIsAuth,
    getStudentMessagesNumber,
    getStudentNotifNumber
} from './redux/student/cabinet-module/selectors';
import StudentCabinet from "./Components/student/student-cabinet/student-cabinet";
import StudentCoursePage from './Components/student/student-course-page/student-course-page';
import {MainPage} from './Components/main-page/main-page';
import NewCourse from './Components/Teacher/new-course/new-course';
import NotificationPage from "./Components/Teacher/notification-page/NotificationPage";
import Messages from './Components/Teacher/messages/messages';
import StudentTimetable from "./Components/student/student-timetable/student-timetable";
import StudentNotifications from './Components/student/student-notifications/student-notifications';
import AdminCabinet from './Components/admin/admin-cabinet';
import {getAdminIsAuth} from "./redux/admin/selectors";
import {initializeAppThunk} from "./redux/app/thunks";
import {AllCourses} from './Components/student/all-courses';
import {StudentCourses} from './Components/student/student-courses/student-courses';
import {Preloader} from "./Components/Common/Preloader";
import {getAppIsLoading} from "./redux/app/selectors";
import { StudentMessages } from './Components/student/student-messages/messages';

type PropsType = {
    teacherIsAuth?: boolean;
    studentIsAuth?: boolean;
    adminIsAuth?: boolean;
    initializeApp: () => void;
    studentMessages: number;
    studentNotifications: number;
    teacherMessages: number;
    teacherNotifications: number;
    isAppLoading: boolean;
};

const AppView = ({
                     teacherIsAuth, studentIsAuth, adminIsAuth, initializeApp,
                     teacherMessages, studentMessages, studentNotifications, teacherNotifications, isAppLoading
                 }: PropsType) => {
    useEffect(() => initializeApp(), []);
    if (isAppLoading) {
        return <Preloader/>
    }
    return (
        <>
            {!studentIsAuth && !teacherIsAuth && !adminIsAuth &&
            <Route exact path="/" render={() => <MainPage/>}/>}
            {teacherIsAuth &&
            (<div className={style.appWrapper}>
                <Header/>
                <Navbar studentIsAuth={false} teacherIsAuth={true} messages={teacherMessages}
                        notifications={teacherNotifications}/>
                <div className={style.appWrapperContent}>
                    <Route exact path="/" render={() => <TeacherCabinet/>}/>
                    <Route exact path="/courses" render={() => <TeacherCourses/>}/>
                    <Route exact path="/course/:id"
                           render={() => <CoursePage/>}/>
                    <Route exact path="/timetable" render={() => <TeacherTimetable/>}/>
                    <Route exact path="/messages" render={() => <Messages/>}/>
                    <Route exact path="/notifications" render={() => <NotificationPage/>}/>
                    <Route exact path="/new/course" render={() => <NewCourse/>}/>
                </div>
            </div>)}
            {studentIsAuth &&
            (<div className={style.appWrapper}>
                <Header/>
                <Navbar studentIsAuth={true} teacherIsAuth={false} messages={studentMessages}
                        notifications={studentNotifications}
                />
                <div className={style.appWrapperContent}>
                    <Route exact path="/" render={() => <StudentCabinet/>}/>
                    <Route exact path="/all/courses" render={() => <AllCourses/>}/>
                    <Route exact path="/student/courses" render={() => <StudentCourses/>}/>
                    <Route exact path="/student/course/:id"
                           render={() => <StudentCoursePage/>}/>
                    <Route exact path="/student/timetable" render={() => <StudentTimetable/>}/>
                    <Route exact path="/student/notifications" render={() => <StudentNotifications/>}/>
                    <Route exact path="/student/messages" render={() => <StudentMessages />}/>
                </div>
            </div>)}
            {adminIsAuth && (<div>
                <Header/>
                <Route exact path="/" render={() => <AdminCabinet/>}/>
            </div>)
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        teacherIsAuth: getTeacherIsAuth(state),
        studentIsAuth: getStudentIsAuth(state),
        adminIsAuth: getAdminIsAuth(state),
        studentMessages: getStudentMessagesNumber(state),
        studentNotifications: getStudentNotifNumber(state),
        teacherMessages: getTeacherMessagesNumber(state),
        teacherNotifications: getTeacherNotificationsNumber(state),
        isAppLoading: getAppIsLoading(state),
    };
};

export const App = connect(mapStateToProps,
    {initializeApp: initializeAppThunk})(AppView);
