import React from 'react';
import { connect } from 'react-redux';
import styles from './TeacherCabinet.module.scss';
import prep from '../../../images/prep.jpg';
import classNames from "classnames/bind";
import Field from "./Field/Field";

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
    telephone: string,
    telegram: string,
    courses: Array<string> | null;
    position: string | null;
    rate: string | null;
    scienceDegree: string | null;
};

type StateType = MapStatePropsType;
type PropsType = MapStatePropsType;

class TeacherCabinet extends React.PureComponent<PropsType, StateType> {
    state = {
        fullName: this.props.fullName,
        birthDate: this.props.birthDate,
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
        scienceDegree: this.props.scienceDegree,
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
    onPositionChange = (e: any) => {
        this.setState({
            position: e.currentTarget.value
        });
    };
    savePosition = () => {
    };
    onRateChange = (e: any) => {
        this.setState({
            rate: e.currentTarget.value
        });
    };
    saveRate = () => {
    };
    onScienceDegreeChange = (e: any) => {
        this.setState({
            scienceDegree: e.currentTarget.value
        });
    };
    saveScienceDegree = () => {
    };
    onEmailChange = (e: any) => {
        this.setState({
            email: e.currentTarget.value
        });
    };
    saveEmail = () => {
    };
    onTelephoneChange = (e: any) => {
        this.setState({
            telephone: e.currentTarget.value
        });
    };
    saveTelephone = () => {
    };
    onTelegramChange = (e: any) => {
        this.setState({
            telegram: e.currentTarget.value
        });
    };
    saveTelegram = () => {
    };

    render() {
        const {fullName, birthDate, address, email, telephone, telegram,
            courses, department, passport, position, rate, scienceDegree,
            snils} = this.state;
        const coursesItem = this.state.courses?.map(item =>
            (<div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
                <li>{item}</li>
            </div>));
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
                               defaultValue={scienceDegree}
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
        fullName: state.teacherReducer.fullName,
        birthDate: state.teacherReducer.birthDate,
        passport: state.teacherReducer.passport,
        snils: state.teacherReducer.snils,
        department: state.teacherReducer.department,
        address: state.teacherReducer.address,
        email: state.teacherReducer.contacts.email,
        telephone: state.teacherReducer.contacts.telephone,
        telegram: state.teacherReducer.contacts.telegram,
        courses: state.teacherReducer.courses,
        position: state.teacherReducer.position,
        rate: state.teacherReducer.rate,
        scienceDegree: state.teacherReducer.scienceDegree
    }
};

export default connect(mapStateToProps)(TeacherCabinet);
