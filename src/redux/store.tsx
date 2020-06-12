import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { teacherReducer } from "./Teacher/TeacherCabinetReducer";
import {teacherTimetableReducer} from "./Teacher/TeacherTimeTable";
import { teacherCoursesReducer } from "./Teacher/TeacherCoursesReducer";
import {studentReducer} from "./student/cabinet-module/reducer";
import { coursesReducer } from "./student/courses-module/reducer";
import thunkMiddleware from "redux-thunk";
import { adminAuthReducer } from "./admin/reducer";
import {appReducer} from "./app/reducer";
import {studentTimetableReducer} from "./student/timetable-module/reducer";

const rootReducer = combineReducers({
    teacherReducer: teacherReducer,
    teacherTimetableReducer: teacherTimetableReducer,
    teacherCoursesReducer: teacherCoursesReducer,

    studentReducer: studentReducer,
    coursesReducer: coursesReducer,
    adminReducer: adminAuthReducer,
    appReducer: appReducer,
    studentTimetableReducer: studentTimetableReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;
