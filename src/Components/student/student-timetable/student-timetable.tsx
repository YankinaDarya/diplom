import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './student-timetable.module.scss';
import { connect } from 'react-redux';
import { TimetableWeek } from '../../../types/types';
import { getStudentTimetableData } from '../../../redux/student/timetable-module/selectors';
import { getStudentTimetableThunk } from '../../../redux/student/timetable-module/thunks';
import {getStudentId} from "../../../redux/student/cabinet-module/selectors";
import {SimpleTimetable} from "../../Common/simple-timetable";


const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-block';

const StudentTimetable = ({timeTableData, getTimetable, id}): JSX.Element => {
   useEffect(() => getTimetable(id), []);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h2 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>Моё расписание</h2>
            <div className={cn(`${COMPONENT_STYLE_NAME}__table-container`)}>
                <SimpleTimetable timeTableData={timeTableData} />
            </div>
        </div>
    );
};

type MapStateToPropsType = {
    timeTableData: Array<TimetableWeek>;
    id: number;
};

const mapStateToProps = (state: any): MapStateToPropsType => ({
    timeTableData: getStudentTimetableData(state),
    id: getStudentId(state),
});

export default connect(mapStateToProps, {getTimetable: getStudentTimetableThunk})(StudentTimetable);
