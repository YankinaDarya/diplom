import React from 'react';
import classNames from 'classnames/bind';
import Cell from './Cell/Cell';
import styles from './Row.module.scss';
import {TimetableWeek} from "../../../../types/types";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-lesson-cell';

type PropsType = {
    rowData: TimetableWeek
    rowNumber: number;
    updateTimeTableAction: (payload: any) => void;
};

const Row = ({rowData, rowNumber, updateTimeTableAction}: PropsType) => {
    const values: Array<{
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
        place: string,
        courseId: number,
    }> = Object.keys(rowData).map(
        key => rowData[key]
    );
    const cells = values.map(
        (cell, index) => <Cell dayNumber={index}
                               lessonNumber={rowNumber} isLecture={cell.isLecture}
                               isSeminar={cell.isSeminar}
                               lessonName={cell.name}
                               place={cell.place}
                               courseId={cell.courseId}
                               updateTimeTableAction={updateTimeTableAction}
                               key={index}/>);
    return (<tbody>
    <tr>
        <td className={cn(COMPONENT_STYLE_NAME)}>{rowNumber} пара</td>
        {cells}
    </tr>
    </tbody>);
};

export default Row;
