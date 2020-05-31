import React, {memo} from 'react';
import styles from './index.module.scss';
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Schedule';

type PropsType = {
    day_cd: string;
    isLecture: boolean;
    isSeminar: boolean;
    place: string;
    time: number;
};

export const Schedule = memo(({day_cd, isLecture, isSeminar, place, time}: PropsType) => {
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            {Boolean(isLecture) && `Лекция - ${day_cd} ${place} ${time}`}
            {Boolean(isSeminar) && `Семинар - ${day_cd} ${place} ${time}`}
        </div>
    );
});
