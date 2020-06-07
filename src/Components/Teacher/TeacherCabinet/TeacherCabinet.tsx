import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TeacherCabinet.module.scss';
import prep from '../../../images/prep.jpg';
import classNames from "classnames/bind";
import Field from "./Field/Field";
import { updateTeacherInfoThunk, getTeacherInfoThunk } from '../../../redux/Teacher/thunks';
import { getTeacherPageLoading } from '../../../redux/Teacher/selectors/teacher-cabinet-selector';
import {Preloader} from "../../Common/Preloader";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Teacher-cabinet';

type MapStatePropsType = {
    teacherId: number;
    firstname: string | null;
    midname: string | null;
    lastname: string | null;
    birthdate: string | null;
    passport: string | null;
    snils: string | null;
    department: string | null;
    address: any;
    email: string,
    telephone: string,
    telegram: string,
    courses: Array<string> | null;
    position: string | null;
    rate: string | null;
    sciencedegree: string | null;
    teacherIsAuth: boolean;
    isTeacherPageLoading: boolean;
};

type StateType = any;
type PropsType = MapStatePropsType & {updateData: (id: number, newData: any) => void,
    getInfo: (id: number) => void
};

class TeacherCabinet extends Component<PropsType, StateType> {
    state = {
        firstname: this.props.firstname,
        midname: this.props.midname,
        lastname: this.props.lastname,
        birthdate: this.props.birthdate,
        passport: this.props.passport,
        snils: this.props.snils,
        department: this.props.department,
        address: this.props.address,
        email: this.props.email,
        telephone: this.props.telephone,
        telegram: this.props.telegram,
        courses: this.props.courses,
        position: this.props.position,
        rate: this.props.rate,
        sciencedegree: this.props.sciencedegree,
    };

    componentDidMount() {
        const {getInfo, teacherId} = this.props;
        getInfo(teacherId);
    }

    onFirstnameChange = (e: any) => {
        this.setState({
            firstname: e.currentTarget.value
        });
    };
    saveFirstName = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {firstname: this.state.firstname});
    };
    onMidnameChange = (e: any) => {
        this.setState({
            midname: e.currentTarget.value
        });
    };
    saveMidname = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {midname: this.state.midname});
    };
    onLastnameChange = (e: any) => {
        this.setState({
            lastname: e.currentTarget.value
        });
    };
    saveLastname = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {lastname: this.state.lastname});
    };
    onBirthdayChange = (e: any) => {
        this.setState({
            birthdate: e.currentTarget.value
        });
    };
    saveBirthday = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {birthdate: this.state.birthdate});
    };
    onPassportChange = (e: any) => {
        this.setState({
            passport: e.currentTarget.value
        });
    };
    savePassport = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {passport: this.state.passport});
    };
    onSnilsChange = (e: any) => {
        this.setState({
            snils: e.currentTarget.value
        });
    };
    saveSnils = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {snils: this.state.snils});
    };
    onDepartmentChange = (e: any) => {
        this.setState({
            department: e.currentTarget.value
        });
    };
    saveDepartment = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {department: this.state.department});
    };
    onAddressChange = (e: any) => {
        this.setState({
            address: e.currentTarget.value
        });
    };
    saveAddress = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {address: this.state.address});
    };
    onPositionChange = (e: any) => {
        this.setState({
            position: e.currentTarget.value
        });
    };
    savePosition = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {position: this.state.position});
    };
    onRateChange = (e: any) => {
        this.setState({
            rate: e.currentTarget.value
        });
    };
    saveRate = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {rate: this.state.rate});
    };
    onScienceDegreeChange = (e: any) => {
        this.setState({
            sciencedegree: e.currentTarget.value
        });
    };
    saveScienceDegree = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {sciencedegree: this.state.sciencedegree});
    };
    onEmailChange = (e: any) => {
        this.setState({
            email: e.currentTarget.value
        });
    };
    saveEmail = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {email: this.state.email});
    };
    onTelephoneChange = (e: any) => {
        this.setState({
            telephone: e.currentTarget.value
        });
    };
    saveTelephone = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {phone: this.state.telephone});
    };
    onTelegramChange = (e: any) => {
        this.setState({
            telegram: e.currentTarget.value
        });
    };
    saveTelegram = () => {
        const {updateData, teacherId} = this.props;
        updateData(teacherId, {telegram: this.state.telegram});
    };

    render() {
        const {firstname, midname, lastname, birthdate, sciencedegree, address, email, telephone, telegram,
            courses, department, passport, position, rate,
            snils, isTeacherPageLoading} = this.props;
        const coursesItem = this.state.courses?.map(item =>
            (<div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                <li>{item}</li>
            </div>));
        if(isTeacherPageLoading) {
            return <Preloader />
        }
        return (
            <div className={cn(COMPONENT_STYLE_NAME)}>
                <h1 className={cn(`${COMPONENT_STYLE_NAME}__header`)}>
                    Личный кабинет
                </h1>
                <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                    Основная информация
                </div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    <img src={prep} alt="prep"
                         className={cn(`${COMPONENT_STYLE_NAME}__avatar`)}/>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                        <Field onClickSave={this.saveLastname}
                               onChange={this.onLastnameChange}
                               defaultValue={lastname}
                               title="Фамилия:"
                        />
                        <Field onClickSave={this.saveFirstName}
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
                <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>Контакты</div>
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
                            <Field onClickSave={this.saveTelephone}
                                   onChange={this.onTelephoneChange}
                                   defaultValue={telephone}
                                   title="Телефон:"
                            />
                        </li>
                        <li>
                            <Field onClickSave={this.saveTelegram}
                                   onChange={this.onTelegramChange}
                                   defaultValue={telegram}
                                   title="Telegram:"
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
                <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>Курсы</div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    <ul className={cn(`${COMPONENT_STYLE_NAME}__list`)}>
                        {coursesItem}
                    </ul>
                </div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>Трудовая деятельность</div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__info`)}>
                        <Field onClickSave={this.savePosition}
                               onChange={this.onPositionChange}
                               defaultValue={position}
                               title="Должность:"
                        />
                        <Field onClickSave={this.saveRate}
                               onChange={this.onRateChange}
                               defaultValue={rate}
                               title="Ставка:"
                        />
                        <Field onClickSave={this.saveScienceDegree}
                               onChange={this.onScienceDegreeChange}
                               defaultValue={sciencedegree}
                               title="Научная степень:"
                        />
                    </div>
                </div>
                <div>
                    <br/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any): MapStatePropsType => {
    return {
        teacherId: state.teacherReducer.teacherId,
        firstname: state.teacherReducer.firstname,
        midname: state.teacherReducer.midname,
        lastname: state.teacherReducer.lastname,
        birthdate: state.teacherReducer.birthdate,
        passport: state.teacherReducer.passport,
        snils: state.teacherReducer.snils,
        department: state.teacherReducer.department,
        address: state.teacherReducer.address,
        email: state.teacherReducer.email,
        telephone: state.teacherReducer.telephone,
        telegram: state.teacherReducer.telegram,
        courses: state.teacherReducer.courses,
        position: state.teacherReducer.position,
        rate: state.teacherReducer.rate,
        sciencedegree: state.teacherReducer.sciencedegree,
        teacherIsAuth: state.teacherReducer.teacherIsAuth,
        isTeacherPageLoading: getTeacherPageLoading(state),
    }
};

export default connect(mapStateToProps,
    {updateData: updateTeacherInfoThunk, getInfo: getTeacherInfoThunk})(TeacherCabinet);
