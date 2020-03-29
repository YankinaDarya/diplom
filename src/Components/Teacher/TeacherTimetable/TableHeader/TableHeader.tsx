import React from 'react';
import classNames from 'classnames/bind';
import styles from './TableHeader.module.scss';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-header';

const TableHeader = () => {
    return (
            <thead>
            <th className={cn(COMPONENT_STYLE_NAME)}></th>
            <th className={cn(COMPONENT_STYLE_NAME)}>Понедельник</th>
            <th className={cn(COMPONENT_STYLE_NAME)}>Вторник</th>
            <th className={cn(COMPONENT_STYLE_NAME)}>Среда</th>
            <th className={cn(COMPONENT_STYLE_NAME)}>Четверг</th>
            <th className={cn(COMPONENT_STYLE_NAME)}>Пятница</th>
            <th className={cn(COMPONENT_STYLE_NAME)}>Суббота</th>
            <th className={cn(COMPONENT_STYLE_NAME)}>Воскресенье</th>
            </thead>
        );
};

export default TableHeader;
