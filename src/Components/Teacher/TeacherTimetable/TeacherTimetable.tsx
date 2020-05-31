import React, {useCallback, useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import TableHeader from './TableHeader/TableHeader';
import Row from './Row/Row';
import styles from './TeacherTimetable.module.scss';
import {connect} from 'react-redux';
import {TimetableWeek} from '../../../types/types';
import {Button} from "@material-ui/core";
import {getTeacherTimetableInfoThunk} from "../../../redux/Teacher/thunks";
import {getTeacherId} from "../../../redux/Teacher/selectors/teacher-cabinet-selector";
import {setTeacherTimetableAction, updateTimeTableAction} from "../../../redux/Teacher/actions";
import { SimpleTimetable } from "../../Common/simple-timetable";
import {
    getTeacherApprovedTimetableData,
    getTeacherTimetableData
} from "../../../redux/Teacher/selectors/teacher-timetable-selector";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-block';

type PropsType = {
    id: number;
    timeTableData: Array<TimetableWeek>;
    approvedTimeTableData: Array<TimetableWeek>;
    updateTimeTable: any;
    getTeacherTimetableInfo: any;
};

const TeacherTimetable = ({id, timeTableData, updateTimeTable, getTeacherTimetableInfo, approvedTimeTableData}: PropsType) => {
    useEffect(() => {
        getTeacherTimetableInfo(id)
    }, []);
    console.log(timeTableData);
    const schedule = [];
    const [isUpdateTable, showUpdateTable] = useState(false);
    const changeIsUpdateTable = useCallback(() => {
        showUpdateTable(!isUpdateTable);
    }, [showUpdateTable, isUpdateTable]);
    const renderRow = timeTableData.map(
        (obj, index) => <Row rowData={obj} rowNumber={index + 1}
                             key={index} updateTimeTableAction={updateTimeTable} />);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <SimpleTimetable timeTableData={approvedTimeTableData}/>
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
            <div className={cn(`${COMPONENT_STYLE_NAME}__button`)}>
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={changeIsUpdateTable}
                >
                    {isUpdateTable ? 'Отмена' : 'Изменить'}
                </Button>
                {isUpdateTable && (
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        /*disabled={submitting}*/
                    >
                        Отправить на согласование
                    </Button>
                )}
            </div>
        </div>
    );
};

type MapStateToPropsType = {
    timeTableData: Array<TimetableWeek>;
};

const mapStateToProps = (state) => ({
    id: getTeacherId(state),
    timeTableData: getTeacherTimetableData(state),
    approvedTimeTableData: getTeacherApprovedTimetableData(state),

});

export default connect(mapStateToProps, {
    updateTimeTable: updateTimeTableAction,
    setTeacherTimetable: setTeacherTimetableAction,
    getTeacherTimetableInfo: getTeacherTimetableInfoThunk,
})(TeacherTimetable);
