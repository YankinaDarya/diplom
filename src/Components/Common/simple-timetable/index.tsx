import React from 'react';
import classNames from 'classnames/bind';
import TableHeader from './TableHeader/TableHeader';
import Row from './Row/Row';
import styles from './index.module.scss';
import {TimetableWeek} from "../../../types/types";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-block';

type PropsType = {
    timeTableData: Array<TimetableWeek>;
};

export const SimpleTimetable = ({timeTableData}: PropsType) => {
    const renderRow = timeTableData.map(
        (obj, index) => <Row rowData={obj} rowNumber={index + 1}
                             key={index}/>);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__table-label`)}>Мое расписание</h1>
            <div className={cn(`${COMPONENT_STYLE_NAME}__table-container`)}>
                <table className={cn(`${COMPONENT_STYLE_NAME}__table`)}>
                    <TableHeader/>
                    {renderRow}
                </table>
            </div>
        </div>
    );
};
