import React from 'react';
import classNames from 'classnames/bind';
import styles from './Settings.module.scss';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { setNewData } from '../../../redux/Teacher/TeacherCabinetReducer';

const cn = classNames.bind(styles);
const BLOCK = 'Settings';

type MapStatePropsType = {
    fullName: string | null;
    birthDate: string | null;
    department: string | null;
};

type MapDispatchPropsType = {
    setNewData: (data: {fullName: string | null;
        birthDate: string | null;
        department: string | null;}) => {}
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const Settings = ({fullName, birthDate, department, setNewData}:
                      PropsType): JSX.Element => {
    const onSubmit = async values => {
        setNewData(values);
        console.log(values);
    };
    const required = value => (value ? undefined : 'Required');
    const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
    const minValue = min => value =>
        isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);
    return (
        <div className={cn(BLOCK)}>
            <Form
                onSubmit={onSubmit}
                initialValues={{
                    fullName: `${fullName}`,
                    birthday: `${birthDate}`,
                    department: `${department}`
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="fullName" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>ФИО:</label>
                                    <input {...input} type="text" placeholder="Фамилия Имя Отчество" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="birthday" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Дата рождения:</label>
                                    <input {...input} type="text" placeholder="Дата рождения" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field
                            name="department"
                            validate={composeValidators(required, mustBeNumber, minValue(18))}
                        >
                            {({ input, meta }) => (
                                <div>
                                    <label>Кафедра:</label>
                                    <input {...input} type="text" placeholder="Кафедра" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
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
        department: state.teacherReducer.department,
    }
};

export default connect(mapStateToProps, {setNewData})(Settings);
