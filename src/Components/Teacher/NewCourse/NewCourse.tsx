import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewCourse.module.scss';
import {Form, Field} from 'react-final-form';
import {connect} from 'react-redux';
import {
    TextField,
} from 'mui-rff';
import {
    Paper,
    Grid,
    Button,
} from '@material-ui/core';

import {setNewData} from '../../../redux/Teacher/TeacherCabinetReducer';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Settings';

type MapStatePropsType = {
    fullName: string | null;
    birthDate: string | null;
    department: string | null;
    passport: string | null;
    snils: string | null;
    address: string | null;
};

type MapDispatchPropsType = {
    setNewData: (data: {
        fullName: string | null;
        birthDate: string | null;
        department: string | null;
        passport: string | null;
        snils: string | null;
        address: string | null;
    }) => {}
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const formFields = [
    {
        field: (
            <TextField
                id="standard-full-width"
                label="Название"
                name="courseName"
                margin="none"
                required={true}
            />
        ),
    },
    {
        field: (
            <TextField
                label="Краткая информация о курсе"
                name="info"
                margin="none"
                required={true}
            />
        ),
    },
    {
        field: (
            <TextField
                label="Время проведения"
                name="time"
                margin="none"
                required={true}
            />
        ),
    },
    {
        field: (
            <TextField
                label="Место проведения"
                name="place"
                margin="none"
                required={true}
            />
        ),
    },
];

const NewCourse = ({setNewData}:
                      PropsType): JSX.Element => {
    const onSubmit = async values => {

        /*setNewData(values);*/
    };
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>Новый курс</h1>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{padding: 16}}>
                                {formFields.map((item, idx) => (
                                    <Grid item key={idx}>
                                        {item.field}
                                    </Grid>
                                ))}
                                <div style={{marginTop: 16}}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Создать
                                    </Button>
                                </div>
                        </Paper>
                    </form>
                )}
            />
        </div>
    );
};

const mapStateToProps = (state: any): MapStatePropsType => {
    return {
        fullName: state.teacherReducer.fullName,
        birthDate: state.teacherReducer.birthDate,
        passport: state.teacherReducer.passport,
        snils: state.teacherReducer.snils,
        department: state.teacherReducer.department,
        address: state.teacherReducer.address,
    }
};

export default connect(mapStateToProps, {setNewData})(NewCourse);
