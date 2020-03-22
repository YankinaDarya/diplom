import React from 'react';
import style from './StudentsTable.module.css';

const StudentsTable = () => {
    return(
        <table className={style.table}>
            <tr>
                <td><b>№</b></td>
                <td><b>Фамилия</b></td>
                <td><b>Имя</b></td>
                <td><b>Номер группы</b></td>
                <td><b>Посещаемость</b></td>
                <td><b>Домашние работы</b></td>
            </tr>
            <tr>
                <td>1</td>
                <td>Степанов</td>
                <td>Петр</td>
                <td>693</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Мокроусов</td>
                <td>Павел</td>
                <td>692</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Талец</td>
                <td>Михаил</td>
                <td>591</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Федорова</td>
                <td>Юлия</td>
                <td>497</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    );
};

export default StudentsTable;