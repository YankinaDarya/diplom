import {createStore, combineReducers} from "redux";
import { teacherReducer } from "./Teacher/TeacherCabinetReducer";
import {teacherTimetableReducer} from "./Teacher/TeacherTimeTable";
import { teacherCoursesReducer } from "./Teacher/TeacherCoursesReducer";
import {studentReducer} from "./student/cabinet-module/reducer";
import {studentCoursesReducer} from "./student/courses-module/reducer";

const rootReducer = combineReducers({
    teacherReducer: teacherReducer,
    teacherTimetableReducer: teacherTimetableReducer,
    teacherCoursesReducer: teacherCoursesReducer,

    studentReducer: studentReducer,
    studentCoursesReducer: studentCoursesReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
const store = createStore(rootReducer);

export default store;
