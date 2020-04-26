import React from 'react';
import { connect } from 'react-redux';
import styles from './student-cabinet.module.scss';
import prep from '../../../images/prep.jpg';
import classNames from "classnames/bind";
import Field from "./Field/Field";
import {
    getStudentAddress, getStudentBirth, getStudentCourse, getStudentCourses, getStudentDepartment,
    getStudentEmail,
    getStudentName,
    getStudentPassport, getStudentSnils
} from '../../../redux/student/cabinet-module/selectors';
import {AppStateType} from "../../../redux/store";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Teacher-cabinet';

type MapStatePropsType = {
    fullName: string | null;
    birthDate: string | null;
    passport: any;
    snils: any;
    department: string | null;
    address: any;
    email: string,
    courses: Array<string> | null;
    course: string;
};

type StateType = MapStatePropsType;
type PropsType = MapStatePropsType;

class StudentCabinet extends React.PureComponent<PropsType, StateType> {
    state = {
        fullName: this.props.fullName,
        birthDate: this.props.birthDate,
        passport: this.props.passport,
        snils: this.props.snils,
        department: this.props.department,
        address: this.props.address,
        email: this.props.email,
        courses: this.props.courses,
        course: this.props.course,
    };
    onNameChange = (e: any) => {
        this.setState({
            fullName: e.currentTarget.value
        });
    };
    saveName = () => {
        const update = this.state.fullName;
    };
    onBirthdayChange = (e: any) => {
        this.setState({
            birthDate: e.currentTarget.value
        });
    };
    saveBirthday = () => {
    };
    onPassportChange = (e: any) => {
        this.setState({
            passport: e.currentTarget.value
        });
    };
    savePassport = () => {
    };
    onSnilsChange = (e: any) => {
        this.setState({
            snils: e.currentTarget.value
        });
    };
    saveSnils = () => {
    };
    onDepartmentChange = (e: any) => {
        this.setState({
            department: e.currentTarget.value
        });
    };
    saveDepartment = () => {
    };
    onAddressChange = (e: any) => {
        this.setState({
            address: e.currentTarget.value
        });
    };
    saveAddress = () => {
    };
    onEmailChange = (e: any) => {
        this.setState({
            email: e.currentTarget.value
        });
    };
    saveEmail = () => {
    };

    render() {
        const {fullName, birthDate, address, email, course,
            courses, department, passport, snils} = this.state;
        const coursesItem = this.state.courses?.map(item =>
            (<div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                <li>{item}</li>
            </div>));
        return (
            <div className={cn(COMPONENT_STYLE_NAME)}>
                <h1 className={cn(`${COMPONENT_STYLE_NAME}__header`)}>
                    Личный кабинет
                </h1>
                <h2 className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                    Основная информация
                </h2>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    <img src={prep} alt="prep"
                         className={cn(`${COMPONENT_STYLE_NAME}__avatar`)}/>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                            <Field onClickSave={this.saveName}
                                   onChange={this.onNameChange}
                                   defaultValue={fullName}
                                   title="Фамилия Имя Отчество:"
                            />
                        <Field onClickSave={this.saveBirthday}
                               onChange={this.onBirthdayChange}
                               defaultValue={birthDate}
                               title="Дата рождения:"
                        />
                        <Field onClickSave={this.savePassport}
                               onChange={this.onPassportChange}
                               defaultValue={passport}
                               title="Паспортные данные:"
                        />
                        <Field onClickSave={this.saveSnils}
                               onChange={this.onSnilsChange}
                               defaultValue={snils}
                               title="СНИЛС:"
                        />
                        <Field onClickSave={this.saveDepartment}
                               onChange={this.onDepartmentChange}
                               defaultValue={department}
                               title="Кафедра:"
                        />
                    </div>
                </div>
                <h2 className={cn(`${COMPONENT_STYLE_NAME}__title`)}>Контакты</h2>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    <ul className={cn(`${COMPONENT_STYLE_NAME}__list`)}>
                        <li>
                            <Field onClickSave={this.saveEmail}
                                   onChange={this.onEmailChange}
                                   defaultValue={email}
                                   title="Email:"
                            />
                        </li>
                        <li>
                            <Field onClickSave={this.saveAddress}
                                   onChange={this.onAddressChange}
                                   defaultValue={address}
                                   title="Адрес прописки:"
                            />
                        </li>
                    </ul>
                </div>
                <h2 className={cn(`${COMPONENT_STYLE_NAME}__title`)}>Курсы</h2>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    <ul className={cn(`${COMPONENT_STYLE_NAME}__list`)}>
                        {coursesItem}
                    </ul>
                </div>
                <div>
                    <br/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        fullName: getStudentName(state),
        birthDate: getStudentBirth(state),
        passport: getStudentPassport(state),
        snils: getStudentSnils(state),
        department: getStudentDepartment(state),
        address: getStudentAddress(state),
        email: getStudentEmail(state),
        courses: getStudentCourses(state),
        course: getStudentCourse(state),
    }
};

export default connect(mapStateToProps)(StudentCabinet);
