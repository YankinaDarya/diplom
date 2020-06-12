import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import style from './StudentsTable.module.scss';
import {HomeworkType} from '../../../../../redux/Teacher/TeacherCoursesReducer';
import { HomeWorkEditField } from './HomeworkEditField/HomeworkEditField';
import { connect } from 'react-redux';
import {sentCommentThunk, sentMarkThunk} from "../../../../../redux/Teacher/thunks";

type PropsType = {
    id: number;
    firstName: string | null;
    secondName: string | null;
    group: string | null;
    homeworks: Array<HomeworkType>;
    index: number;
    sentMark: any;
    sentComment: any;
    courseId: number;
};

const StudentsRowView = ({firstName, secondName, group,
                         homeworks, index, sentMark, id,
                             courseId, sentComment}: PropsType) => {
    const [mark, setMark] = useState('');
    const [comment, setComment] = useState('');

    const handleSetMark = (event: any) => {
        setMark(event.currentTarget.value);
    };

    const handleSetComment = (event: any) => {
        setComment(event.currentTarget.value);
    };

    const homeworksData = homeworks.map((work) => <div>
        <a href={`${work.hw_url}`}>Задание {work.week_num}</a>
    </div>);

    const homeworksMark = homeworks.map((work) =>
        <HomeWorkEditField onClickSave={() => sentMark(courseId, mark, id, work.week_num)}
               onChange={handleSetMark}
               defaultValue={work.mark ? `${work.mark}` : 'оценить'}
               title=""
    />);

    const homeworksComment = homeworks.map((work) =>
        <HomeWorkEditField onClickSave={() => sentComment(courseId, comment, id, work.week_num)}
                           onChange={handleSetComment}
                           defaultValue={work.comment ? `${work.comment}` : 'комментировать'}
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

export default connect(null, {sentMark: sentMarkThunk, sentComment: sentCommentThunk})(StudentsRowView);
