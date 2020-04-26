import React from 'react';
import style from './StudentsTable.module.scss';
import { StudentsHomework } from '../../../../../redux/Teacher/TeacherCoursesReducer';
import { HomeWorkEditField } from './HomeworkEditField/HomeworkEditField';

type PropsType = {
    id: number;
    firstName: string;
    secondName: string;
    group: number;
    homeworks: Array<StudentsHomework>;
    index: number;
};

const StudentsRow = ({id, firstName, secondName, group,
                         homeworks, index}: PropsType): JSX.Element => {
    const homeworksData = homeworks.map((work) => <div>
        <a href="https://github.com/">{work.file}</a>
    </div>);
    const homeworksMark = homeworks.map((work) =>
        <HomeWorkEditField onClickSave={() => {}}
               onChange={() => {}}
               defaultValue={`${work.mark}`}
               title=""
    />);
    const homeworksComment = homeworks.map((work) =>
        <HomeWorkEditField onClickSave={() => {}}
                           onChange={() => {}}
                           defaultValue={`${work.comment}`}
                           title=""
    />);
    return(
        <>
            <tr>
                <td className={style.tableData}>{index}</td>
                <td className={style.tableData}>{secondName}</td>
                <td className={style.tableData}>{firstName}</td>
                <td className={style.tableData}>{group}</td>
                <td className={style.tableData}>
                    {homeworksData}
                </td>
                <td className={style.tableData}>
                    {homeworksMark}
                </td>
                <td className={style.tableData}>
                    {homeworksComment}
                </td>
            </tr>
        </>
    );
};

export default StudentsRow;
