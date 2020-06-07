import React, {memo, useMemo} from 'react';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import MenuItem from '@material-ui/core/MenuItem';
import {
    Select
} from 'mui-rff';
import {
    Paper,
    Grid,
    Button,
} from '@material-ui/core';
import {Radios} from "mui-rff";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Form';

type PropsType = {
    isLecture: boolean;
    isSeminar: boolean;
    lessonName: string;
    place: string;
    onSubmit: (values: { lessonName: string, lessonType: string }) => void;
    deleteLesson: () => void;
    teacherCourses: Array<any>;
};

export const LessonForm = memo(({
                                    lessonName,
                                    isLecture, isSeminar, onSubmit, place, deleteLesson, teacherCourses
                                }: PropsType) => {
    const onMySubmit = (values) => {
        onSubmit(values);
    };
    const options = teacherCourses.map((course) => {
        return {id: course.id, name: course.name}
    });
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <Form
                onSubmit={onMySubmit}
                initialValues={{
                    lessonName: `${lessonName}`, lessonType: isLecture ?
                        'lecture' : isSeminar ? 'seminar' : '', place: place
                }}
                render={({handleSubmit, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__select-container`)}>
                                <Select
                                    name="courseId"
                                    label="Предмет"
                                >
                                    {options.map((course) =>
                                        <MenuItem value={course.id}>{course.name}</MenuItem>)}
                                </Select>
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__place-container`)}>
                                <Field
                                    label="Место проведения"
                                    name="place"
                                    component={TextField}
                                    required={false}
                                    style={{width: '300px'}}
                                />
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__type-container`)}>
                                <Radios
                                    label="Тип занятия"
                                    name="lessonType"
                                    formControlProps={{margin: 'none'}}
                                    radioGroupProps={{row: true}}
                                    data={[
                                        {label: 'Лекция', value: 'lecture'},
                                        {label: 'Семинар', value: 'seminar'},
                                    ]}
                                />
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__buttons-container`)}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    Добавить
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="button"
                                    onClick={deleteLesson}
                                >
                                    Удалить
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
    );
});
