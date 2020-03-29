import React from 'react';
import classNames from 'classnames/bind';
import styles from './Settings.module.scss';
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
                label="ФИО"
                name="fullName"
                margin="none"
                required={true}
            />
        ),
    },
    {
        field: (
            <TextField
                label="Дата Рождения"
                name="birthday"
                margin="none"
                required={true}
            />
        ),
    },
    {
        field: (
            <TextField
                label="Паспортные данные"
                name="passport"
                margin="none"
                required={true}
            />
        ),
    },
    {
        field: (
            <TextField
                label="СНИЛС"
                name="snils"
                margin="none"
                required={true}
            />
        ),
    },
    {
        field: (
            <TextField
                label="Кафедра"
                name="department"
                margin="none"
                required={true}
            />
        ),
    },
    {
        field: (
            <TextField
                label="Адресс"
                name="address"
                margin="none"
                required={true}
            />
        ),
    },
];


const Settings = ({fullName, birthDate, department, passport,
                      snils, address, setNewData}:
                      PropsType): JSX.Element => {
    const onSubmit = async values => {
        setNewData(values);
    };
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>Настройки</h1>
            <Form
                onSubmit={onSubmit}
                initialValues={{
                    fullName: `${fullName}`,
                    birthday: `${birthDate}`,
                    department: `${department}`,
                    passport: `${passport}`,
                    snils: `${snils}`,
                    address: `${address}`,
                }}
                render={({handleSubmit, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{padding: 16}}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                {formFields.map((item, idx) => (
                                    <Grid item key={idx}>
                                        {item.field}
                                    </Grid>
                                ))}
                                <Grid item style={{marginTop: 16}}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Изменить
                                    </Button>
                                </Grid>
                            </Grid>
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

export default connect(mapStateToProps, {setNewData})(Settings);
