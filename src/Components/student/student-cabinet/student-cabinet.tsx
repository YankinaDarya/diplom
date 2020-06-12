import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './student-cabinet.module.scss';
import prep from '../../../images/prep.jpg';
import classNames from "classnames/bind";
import Field from "./Field/Field";
import {
    getStudentAddress,
    getStudentBirth,
    getStudentCourse,
    getStudentCourses,
    getStudentDepartment,
    getStudentEmail,
    getStudentLastname,
    getStudentMidname,
    getStudentFirstname,
    getStudentPhone,
    getStudentFaculty,
    getStudentTelegram, getStudentGroup, getStudentId, getStudentPageLoading
} from '../../../redux/student/cabinet-module/selectors';
import {AppStateType} from "../../../redux/store";
import {updateStudentInfoThunk, getStudentAllInfoThunk} from "../../../redux/student/cabinet-module/thunks";
import { Preloader } from '../../Common/Preloader';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Teacher-cabinet';

type MapStatePropsType = {
    lastname: string | null;
    midname: string | null;
    firstname: string | null;
    birthdate: string | null;
    department: string | null;
    address: any;
    email: string,
    faculty: string | null;
    phone: string | null;
    telegram: string | null;
    courses: Array<string> | null;
    course: number;
    group: string;
    id: number;
    isLoading?: boolean;
};

type MapDispatchToPropsType = {
    update: any;
    getInfo: any;
};

type StateType = MapStatePropsType;
type PropsType = MapStatePropsType & MapDispatchToPropsType;

class StudentCabinet extends Component<PropsType, StateType> {
    componentDidMount(): void {
        this.props.getInfo(this.props.id);
    }
    state = {
        lastname: this.props.lastname,
        midname: this.props.midname,
        firstname: this.props.firstname,
        birthdate: this.props.birthdate,
        department: this.props.department,
        address: this.props.address,
        email: this.props.email,
        faculty: this.props.faculty,
        phone: this.props.phone,
        telegram: this.props.telegram,
        courses: this.props.courses,
        course: this.props.course,
        group: this.props.group,
        id: this.props.id,
    };
    onLastnameChange = (e: any) => {
        this.setState({
            lastname: e.currentTarget.value
        });
    };
    saveLastname = () => {
        this.props.update(this.props.id, {lastname: this.state.lastname});
    };
    onFirstnameChange = (e: any) => {
        this.setState({
            firstname: e.currentTarget.value
        });
    };
    saveFirstname = () => {
        this.props.update(this.props.id, {firstname: this.state.firstname});
    };
    onMidnameChange = (e: any) => {
        this.setState({
            midname: e.currentTarget.value
        });
    };
    saveMidname = () => {
        this.props.update(this.props.id, {midname: this.state.midname});
    };
    onBirthdayChange = (e: any) => {
        this.setState({
            birthdate: e.currentTarget.value
        });
    };
    saveBirthday = () => {
        this.props.update(this.props.id, {birthdate: this.state.birthdate});
    };
    onDepartmentChange = (e: any) => {
        this.setState({
            department: e.currentTarget.value
        });
    };
    saveDepartment = () => {
        this.props.update(this.props.id, {department: this.state.department});
    };
    onAddressChange = (e: any) => {
        this.setState({
            address: e.currentTarget.value
        });
    };
    saveAddress = () => {
        this.props.update(this.props.id, {address: this.state.address});
    };
    onEmailChange = (e: any) => {
        this.setState({
            email: e.currentTarget.value
        });
    };
    saveEmail = () => {
        this.props.update(this.props.id, {email: this.state.email});
    };
    onTelephoneChange = (e: any) => {
        this.setState({
            phone: e.currentTarget.value
        });
    };
    savePhone = () => {
        this.props.update(this.props.id, {phone: this.state.phone});
    };
    onTelegramChange = (e: any) => {
        this.setState({
            telegram: e.currentTarget.value
        });
    };
    saveTelegram = () => {
        this.props.update(this.props.id, {telegram: this.state.telegram});
    };
    onGroupChange = (e: any) => {
        this.setState({
            group: e.currentTarget.value
        });
    };
    saveGroup = () => {
        this.props.update(this.props.id, {group: this.state.group});
    };
    onFacultyChange = (e: any) => {
        this.setState({
            faculty: e.currentTarget.value
        });
    };
    saveFaculty = () => {
        this.props.update(this.props.id, {faculty: this.state.faculty});
    };
    onCourseChange = (e: any) => {
        this.setState({
            course: e.currentTarget.value
        });
    };
    saveCourse = () => {
        this.props.update(this.props.id, {course: this.state.course});
    };

    render() {
        if(this.props.isLoading) {
            return <Preloader />
        }
        const {
            lastname, midname, firstname, group, faculty, birthdate, address, email, course,
            courses, department, phone, telegram
        } = this.props;
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
                        <Field onClickSave={this.saveLastname}
                               onChange={this.onLastnameChange}
                               defaultValue={lastname}
                               title="Фамилия:"
                        />
                        <Field onClickSave={this.saveFirstname}
                               onChange={this.onFirstnameChange}
                               defaultValue={firstname}
                               title="Имя:"
                        />
                        <Field onClickSave={this.saveMidname}
                               onChange={this.onMidnameChange}
                               defaultValue={midname}
                               title="Отчество:"
                        />
                        <Field onClickSave={this.saveBirthday}
                               onChange={this.onBirthdayChange}
                               defaultValue={birthdate}
                               title="Дата рождения:"
                        />
                        <Field onClickSave={this.saveCourse}
                               onChange={this.onCourseChange}
                               defaultValue={Boolean(course) ? String(course) : ''}
                               title="Курс:"
                        />
                        <Field onClickSave={this.saveFaculty}
                               onChange={this.onFacultyChange}
                               defaultValue={faculty}
                               title="Факультет:"
                        />
                        <Field onClickSave={this.saveGroup}
                               onChange={this.onGroupChange}
                               defaultValue={group}
                               title="Группа:"
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
                            <Field onClickSave={this.savePhone}
                                   onChange={this.onTelephoneChange}
                                   defaultValue={phone}
                                   title="Телефон:"
                            />
                        </li>
                        <li>
                            <Field onClickSave={this.saveTelegram}
                                   onChange={this.onTelegramChange}
                                   defaultValue={telegram}
                                   title="Телеграм:"
                            />
                        </li>
                        <li>
                            <Field onClickSave={this.saveAddress}
                                   onChange={this.onAddressChange}
                                   defaultValue={address}
                                   title="Адрес:"
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
        lastname: getStudentLastname(state),
        midname: getStudentMidname(state),
        firstname: getStudentFirstname(state),
        birthdate: getStudentBirth(state),
        department: getStudentDepartment(state),
        address: getStudentAddress(state),
        email: getStudentEmail(state),
        phone: getStudentPhone(state),
        faculty: getStudentFaculty(state),
        telegram: getStudentTelegram(state),
        courses: getStudentCourses(state),
        course: getStudentCourse(state),
        group: getStudentGroup(state),
        id: getStudentId(state),
        isLoading: getStudentPageLoading(state),
    }
};

export default connect(mapStateToProps, {update: updateStudentInfoThunk,
    getInfo: getStudentAllInfoThunk})(StudentCabinet);
