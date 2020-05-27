import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { teacherReducer } from "./Teacher/TeacherCabinetReducer";
import {teacherTimetableReducer} from "./Teacher/TeacherTimeTable";
import { teacherCoursesReducer } from "./Teacher/TeacherCoursesReducer";
import {studentReducer} from "./student/cabinet-module/reducer";
import {studentCoursesReducer} from "./student/courses-module/reducer";
import thunkMiddleware from "redux-thunk";
import { adminAuthReducer } from "./admin/reducer";
import {appReducer} from "./app/reducer";

const rootReducer = combineReducers({
    teacherReducer: teacherReducer,
    teacherTimetableReducer: teacherTimetableReducer,
    teacherCoursesReducer: teacherCoursesReducer,

    studentReducer: studentReducer,
    studentCoursesReducer: studentCoursesReducer,
    adminReducer: adminAuthReducer,
    appReducer: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;
