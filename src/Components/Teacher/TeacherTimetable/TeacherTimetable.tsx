import React from 'react';
import classNames from 'classnames/bind';
import TableHeader from './TableHeader/TableHeader';
import Row from './Row/Row';
import styles from './TeacherTimetable.module.scss';
import { connect } from 'react-redux';
import { TimetableWeek } from '../../../types/types';
import {updateTimeTableAction} from "../../../redux/Teacher/TeacherTimeTable";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-block';

const TeacherTimetable = ({timeTableData, updateTimeTableAction}): JSX.Element => {
    const renderRow = timeTableData.map(
        (obj, index) => <Row rowData={obj}  rowNumber={index + 1}
                             key={index} updateTimeTableAction={updateTimeTableAction} />);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h2 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>Моё расписание</h2>
            <table className={cn(`${COMPONENT_STYLE_NAME}__table`)}>
                <TableHeader />
                {renderRow}
            </table>
            <button className={cn(`${COMPONENT_STYLE_NAME}__button`)}>
                Отправить на согласование
            </button>
        </div>
    );
};

type MapStateToPropsType = {
    timeTableData: Array<TimetableWeek>
};

const mapStateToProps = (state: any): MapStateToPropsType => {
    return {
        timeTableData: state.teacherTimetableReducer.timeTableData
    }
};

export default connect(mapStateToProps, {updateTimeTableAction})(TeacherTimetable);
