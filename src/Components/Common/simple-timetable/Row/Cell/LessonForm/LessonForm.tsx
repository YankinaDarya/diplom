import React from 'react';
import { Form } from 'react-final-form';
import {
    TextField,
    Radios,
} from 'mui-rff';
import {
    Paper,
    Grid,
    Button,
} from '@material-ui/core';

const formFields = [
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
];

type PropsType = {
    isLecture: boolean;
    isSeminar: boolean;
    lessonName: string;
    onSubmit: (values: {lessonName: string, lessonType: string}) => void
};

export const LessonForm = ({lessonName,
                               isLecture, isSeminar, onSubmit}: PropsType): JSX.Element => {
    const onMySubmit = (values) => {
        onSubmit(values);
    };
    return (
            <Form
                onSubmit={onMySubmit}
                initialValues={{ lessonName: `${lessonName}`, lessonType: isLecture ?
                        'lecture' : isSeminar ? 'seminar' : '' }}
                render={({ handleSubmit, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 16 }}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                {formFields.map((item, idx) => (
                                    <Grid item key={idx}>
                                        {item.field}
                                    </Grid>
                                ))}
                                <Grid item style={{ marginTop: 16 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Добавить
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
    );
};
