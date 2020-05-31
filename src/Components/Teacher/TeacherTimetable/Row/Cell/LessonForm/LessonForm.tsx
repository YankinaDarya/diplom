import React, {memo, useMemo} from 'react';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import MenuItem from '@material-ui/core/MenuItem';
/*import {Field, Form} from 'react-final-form';*/
import {
    Select
} from 'mui-rff';
import {
    Paper,
    Grid,
    Button,
} from '@material-ui/core';
import {Radios} from "mui-rff";

/*const formFields = [
    {
        size: 6,
        field: (
            <TextField
                label="Предмет"
                name="lessonName"
                margin="none"
                required={true}
            />
        ),
    },
    {
        size: 6,
        field: (
            <TextField
                label="Место проведения"
                name="place"
                margin="none"
                required={false}
            />
        ),
    },
    {
        size: 12,
        field: (
            <Radios
                label="Тип занятия"
                name="lessonType"
                formControlProps={{ margin: 'none' }}
                radioGroupProps={{ row: true }}
                data={[
                    { label: 'Лекция', value: 'lecture' },
                    { label: 'Семинар', value: 'seminar' },
                ]}
            />
        ),
    },
];*/

type PropsType = {
    isLecture: boolean;
    isSeminar: boolean;
    lessonName: string;
    place: string;
    onSubmit: (values: {lessonName: string, lessonType: string}) => void;
    deleteLesson: () => void;
    teacherCourses: Array<any>;
};

export const LessonForm = memo(({lessonName,
                               isLecture, isSeminar, onSubmit, place, deleteLesson, teacherCourses}: PropsType) => {
    const onMySubmit = (values) => {
        onSubmit(values);
    };
    const options = teacherCourses.map((course) => {
        return {id: course.id, name: course.name}
    });
    return (
            <Form
                onSubmit={onMySubmit}
                initialValues={{ lessonName: `${lessonName}`, lessonType: isLecture ?
                        'lecture' : isSeminar ? 'seminar' : '', place: place }}
                render={({ handleSubmit, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 16 }}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Select
                                    name="courseId"
                                    label="Предмет"
                                >
                                    {options.map((course) =>
                                        <MenuItem value={course.id}>{course.name}</MenuItem>)}
                                </Select>
                                <Field
                                    label="Место проведения"
                                    name="place"
                                    component={TextField}
                                    required={false}
                                />
                                <Radios
                                    label="Тип занятия"
                                    name="lessonType"
                                    formControlProps={{ margin: 'none' }}
                                    radioGroupProps={{ row: true }}
                                    data={[
                                        { label: 'Лекция', value: 'lecture' },
                                        { label: 'Семинар', value: 'seminar' },
                                    ]}
                                />
                                {/*{formFields.map((item, idx) => (
                                    <Grid item key={idx}>
                                        {item.field}
                                    </Grid>
                                ))}*/}
                                <Grid item style={{ marginTop: 16 }}>
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
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
    );
});
