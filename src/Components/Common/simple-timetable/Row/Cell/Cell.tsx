import React from 'react';
import classNames from 'classnames/bind';
import styles from './Cell.module.scss';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-cell';

type PropsType = {
    dayNumber: number;
    lessonNumber: number;
    isLecture: boolean;
    isSeminar: boolean;
    lessonName: string;
    place: string;
};

const Cell = ({
                  lessonName,
                  isLecture, isSeminar, place,
              }: PropsType) => {
    return (
        <>
            <td className={cn(COMPONENT_STYLE_NAME,
                {[`${COMPONENT_STYLE_NAME}--lecture`]: isLecture,},
                {[`${COMPONENT_STYLE_NAME}--seminar`]: isSeminar,},
            )}>
                <div>
                    {lessonName}
                </div>
                <div>
                    {place}
                </div>
            </td>
        </>
    );
};

export default Cell;


