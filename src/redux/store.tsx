import {createStore, combineReducers} from "redux";
import { teacherReducer } from "./Teacher/TeacherCabinetReducer";
import {teacherTimetableReducer} from "./Teacher/TeacherTimeTable";

const rootReducer = combineReducers({
    teacherReducer: teacherReducer,
    teacherTimetableReducer: teacherTimetableReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
const store = createStore(rootReducer);

export default store;