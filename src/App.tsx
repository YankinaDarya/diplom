import React, {FC} from 'react';
import {Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import style from './App.module.css';
import TeacherCourses from "./Components/Teacher/TeacherCourses/TeacherCourses";
import CoursePage from "./Components/Teacher/CoursePage/CoursePage";
import Abstract from "./Components/Teacher/CoursePage/Abstract/Abstract";
import Settings from './Components/Teacher/Settings/Settings';
import TeacherCabinet from './Components/Teacher/TeacherCabinet/TeacherCabinet';
import TeacherTimetable from "./Components/Teacher/TeacherTimetable/TeacherTimetable";
import NewCourse from "./Components/Teacher/NewCourse/NewCourse";

type PropsType = {

};

const App: FC<PropsType> = () => {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={style.appWrapperContent}>
                <Route path="/cabinet" render={() => <TeacherCabinet />}/>
                <Route exact path="/courses" render={() => <TeacherCourses />}/>
                <Route exact path="/courses/web" render={() => <CoursePage />}/>
                <Route exact path="/courses/web/week1" render={() => <Abstract />}/>
                <Route exact path="/timetable" render={() => <TeacherTimetable />}/>
                <Route exact path="/new_course" render={() => <NewCourse />}/>
                <Route exact path="/settings" render={() => <Settings />}/>
            </div>
        </div>
    );
};

export default App;
