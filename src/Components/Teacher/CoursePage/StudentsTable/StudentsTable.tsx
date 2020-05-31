import React from 'react';
import style from './StudentsTable.module.css';
import {Students} from '../../../../redux/Teacher/TeacherCoursesReducer';
import StudentsRow from "./StudentsTable/StudentsRow";

type PropsType = {
    students: Array<Students>;
};

const StudentsTable = ({students}: PropsType): JSX.Element => {
    const studentRow = students.map(({
                                         student_id, firstname, lastname,
                                         hw,
                                         group
                                     }, index) => <StudentsRow id={student_id}
                                                               firstName={firstname}
                                                               secondName={lastname}
                                                               homeworks={hw}
                                                               group={group}
                                                               index={index + 1}
    />);
    return (
        <table className={style.table}>
            <tr>
                <td className={style.tableData}><b>№</b></td>
                <td className={style.tableData}><b>Фамилия</b></td>
                <td className={style.tableData}><b>Имя</b></td>
                <td className={style.tableData}><b>Номер группы</b></td>
                <td className={style.tableData}><b>Домашние работы</b></td>
                <td className={style.tableData}><b>Оценки</b></td>
                <td className={style.tableData}><b>Комментарии</b></td>
            </tr>
            {studentRow}
        </table>
    );
};

export default StudentsTable;
