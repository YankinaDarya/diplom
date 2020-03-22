import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css';

type PropsType = {};

const Navbar: FC<PropsType> = () => {
    return (
        <nav className={style.nav}>
            <div className={style.menuBlock}>
                <div className={style.item}>
                    <NavLink to="/cabinet"
                             activeClassName={style.activeLink}>
                        Личный кабинет
                    </NavLink>
                </div>
                <div className={`${style.item} ${style.active}`}>
                    <NavLink to="/courses" activeClassName={style.activeLink}>
                        Мои курсы
                    </NavLink>
                </div>
                <div className={`${style.item} ${style.active}`}>
                    <NavLink to="/timetable" activeClassName={style.activeLink}>
                        Мое расписание
                    </NavLink>
                </div>
                <div className={`${style.item} ${style.active}`}>
                    <NavLink to="/messages" activeClassName={style.activeLink}>
                        Уведомления
                    </NavLink>
                </div>
                <div className={`${style.item} ${style.active}`}>
                    <NavLink to="/new_course"
                             activeClassName={style.activeLink}>
                        Новый курс
                    </NavLink>
                </div>
                <div className={`${style.item} ${style.active}`}>
                    <NavLink to="/settings" activeClassName={style.activeLink}>
                        Настройки
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
