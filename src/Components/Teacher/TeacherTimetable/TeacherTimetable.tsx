import React, {useCallback, useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import TableHeader from './TableHeader/TableHeader';
import Row from './Row/Row';
import styles from './TeacherTimetable.module.scss';
import {connect} from 'react-redux';
import {TimetableWeek} from '../../../types/types';
import {Button} from "@material-ui/core";
import {getTeacherTimetableInfoThunk, sentTeacherTimetableThunk} from "../../../redux/Teacher/thunks";
import {getTeacherId, getTeacherPageLoading, getTeacherIsAuth} from "../../../redux/Teacher/selectors/teacher-cabinet-selector";
import {
    setCopiedApprovedTeacherTimetableAction,
    setTeacherTimetableAction,
    updateTimeTableAction
} from "../../../redux/Teacher/actions";
import {SimpleTimetable} from "../../Common/simple-timetable";
import {
    getCopiedTeacherApprovedTimetableData,
    getHasUnapprovedTimetable,
    getTeacherApprovedTimetableData,
    getTeacherTimetableData
} from "../../../redux/Teacher/selectors/teacher-timetable-selector";
import {getTeacherCourses} from "../../../redux/Teacher/selectors/teacher-course-selectors";
import {Preloader} from "../../Common/Preloader";
import { Redirect } from 'react-router-dom';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-block';

type PropsType = {
    id: number;
    unapprovedTimetableFlag: boolean;
    timeTableData: Array<TimetableWeek>;
    approvedTimeTableData: Array<TimetableWeek>;
    setCopiedApprovedTeacherTimetable: any;
    updateTimeTable: any;
    getTeacherTimetableInfo: any;
    copiedApprovedTimeTableData: any;
    teacherCourses: Array<any>;
    approve: (id: number, payload: any) => void;
    isTeacherPageLoading: boolean;
    isAuth: boolean;
};

const TeacherTimetable = ({
                              id, timeTableData, updateTimeTable, getTeacherTimetableInfo,
                              approvedTimeTableData, unapprovedTimetableFlag, copiedApprovedTimeTableData,
                              setCopiedApprovedTeacherTimetable, teacherCourses, approve, isTeacherPageLoading, isAuth,
                          }: PropsType) => {
    useEffect(() => {
        getTeacherTimetableInfo(id)
    }, []);
    const [isUpdateTable, showUpdateTable] = useState(false);
    const changeIsUpdateTable = useCallback(() => {
        showUpdateTable(!isUpdateTable);
    }, [showUpdateTable, isUpdateTable]);
    const approveTimetable = () => {
        const schedule = [];
        const allScheduleData = copiedApprovedTimeTableData.forEach((week, index) => {
            const days = Object.keys(week);
            days.forEach((day) => {
                if (Boolean(week[day].courseId)) {
                    const data = {
                        course_id: week[day].courseId,
                        day_cd: day,
                        time: index + 1,
                        place: week[day].place,
                        islecture: week[day].isLecture,
                        isseminar: week[day].isSeminar,
                    };
                    // @ts-ignore
                    schedule.push(data);
                }
            });
        });
        approve(id, schedule);
        changeIsUpdateTable();
    };
    const renderRow = copiedApprovedTimeTableData.map(
        (obj, index) => <Row rowData={obj} rowNumber={index + 1}
                             key={index} updateTimeTableAction={setCopiedApprovedTeacherTimetable}
                             teacherCourses={teacherCourses}/>);
    if(isTeacherPageLoading) {
        return <Preloader />
    }
    if (!isAuth) return <Redirect to={"/"}/>;
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__table-container`)}>
                <h2 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>Мое расписание</h2>
                <SimpleTimetable timeTableData={approvedTimeTableData}/>
            </div>
            {unapprovedTimetableFlag && (
                <div className={cn(`${COMPONENT_STYLE_NAME}__table-container`)}>
                    <h2 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>Расписание на рассмотрении</h2>
                    <SimpleTimetable timeTableData={timeTableData}/>
                </div>
            )}
            {isUpdateTable && (
                <><h2 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>Новое расписание</h2>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__table-container`)}>
                        <table className={cn(`${COMPONENT_STYLE_NAME}__table`)}>
                            <TableHeader/>
                            {renderRow}
                        </table>
                    </div>
                </>
            )}
            {!unapprovedTimetableFlag && (
                <div className={cn(`${COMPONENT_STYLE_NAME}__buttons-container`)}>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__button`)}>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            onClick={changeIsUpdateTable}
                        >
                            {isUpdateTable ? 'Отмена' : 'Изменить'}
                        </Button>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__button`)}>
                        {isUpdateTable && (
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={approveTimetable}
                            >
                                Отправить на согласование
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    id: getTeacherId(state),
    timeTableData: getTeacherTimetableData(state),
    approvedTimeTableData: getTeacherApprovedTimetableData(state),
    copiedApprovedTimeTableData: getCopiedTeacherApprovedTimetableData(state),
    unapprovedTimetableFlag: getHasUnapprovedTimetable(state),
    teacherCourses: getTeacherCourses(state),
    isTeacherPageLoading: getTeacherPageLoading(state),
    isAuth: state.teacherReducer.teacherIsAuth,
});

export default connect(mapStateToProps, {
    updateTimeTable: updateTimeTableAction,
    setTeacherTimetable: setTeacherTimetableAction,
    getTeacherTimetableInfo: getTeacherTimetableInfoThunk,
    setCopiedApprovedTeacherTimetable: setCopiedApprovedTeacherTimetableAction,
    approve: sentTeacherTimetableThunk,
})(TeacherTimetable);
