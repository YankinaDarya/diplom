import React from 'react';
import style from './TeacherCabinet.module.css';
import prep from '../../../images/prep.jpg';
import { connect } from 'react-redux';
import {Contacts} from "../../../types/types";

type MapStatePropsType = {
    fullName: number | null;
    birthDate: string | null;
    passport: any;
    snils: any;
    department: string | null;
    address: any;
    contacts: Contacts | null;
    courses: Array<string> | null;
    position: string | null;
    rate: string | null;
    scienceDegree: string | null;
};

type PropsType = MapStatePropsType;

const TeacherCabinet = ({fullName, birthDate,
                            passport, snils, department, address,
                            contacts, courses, position,
                            rate, scienceDegree}: PropsType)
    : JSX.Element => {
    const coursesItem = courses?.map(item => <li>{item}</li>);
    return (
        <div className={style.cabinetWrapper}>
            <h1 className={style.h1}>
                Личный кабинет
            </h1>
            <h2 className={style.h2}>Основная информация</h2>
            <div className={style.dataBlock}>
                <img src={prep} alt="prep" className={style.avatar}/>
                <div className={style.info}>
                    <div className={style.item}>
                        Фамилия Имя Отчество: {fullName}
                    </div>
                    <div className={style.item}>
                        Дата рождения: {birthDate}
                    </div>
                    <div className={style.item}>
                        Паспортные данные: {passport}
                    </div>
                    <div className={style.item}>
                        СНИЛС: {snils}
                    </div>
                    <div className={style.item}>
                        Кафедра: {department}
                    </div>
                </div>
            </div>
            <h2 className={style.h2}>Контакты</h2>
            <div className={style.dataBlock}>
                <ul>
                    <li>Email: {contacts?.email}</li>
                    <li>Телефон: {contacts?.telephone}</li>
                    <li>Telegram: {contacts?.telegram}</li>
                    <li>Адрес прописки: {address}</li>
                </ul>
            </div>
            <h2 className={style.h2}>Курсы</h2>
            <div className={style.dataBlock}>
                <ul>
                    {coursesItem}
                </ul>
            </div>
            <h2 className={style.h2}>Трудовая деятельность</h2>
            <div className={style.dataBlock}>
                <div className={style.info}>
                <div className={style.item}>Должность: {position}</div>
                <div className={style.item}>Ставка: {rate}</div>
                <div className={style.item}>Научная степень: {scienceDegree}</div>
                </div>
            </div>
            <div>
                <br />
            </div>
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
        contacts: state.teacherReducer.contacts,
        courses: state.teacherReducer.courses,
        position: state.teacherReducer.position,
        rate: state.teacherReducer.rate,
        scienceDegree: state.teacherReducer.scienceDegree
    }
};

export default connect(mapStateToProps)(TeacherCabinet);
