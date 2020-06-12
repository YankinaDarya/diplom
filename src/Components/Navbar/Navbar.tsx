import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';

type PropsType = {
    teacherIsAuth: boolean;
    studentIsAuth: boolean;
    messages: number;
    notifications: number;
};

const Navbar = ({teacherIsAuth, studentIsAuth, messages, notifications}: PropsType) => {
    return (
        <nav className={style.nav}>
            <div className={style.menuBlock}>
                {teacherIsAuth && (<>
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
                        <NavLink to="/notifications" activeClassName={style.activeLink}>
                            Уведомления
                            {Boolean(notifications) && (<IconButton aria-label="show 11 new notifications" color="inherit">
                                <Badge badgeContent={notifications} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>)}
                        </NavLink>
                    </div>
                    <div className={`${style.item} ${style.active}`}>
                        <NavLink to="/messages" activeClassName={style.activeLink}>
                            Сообщения
                            {Boolean(messages) && (
                                <IconButton aria-label="show 11 new notifications" color="inherit">
                                    <Badge badgeContent={messages} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                            )}
                        </NavLink>
                    </div>
                </>)}
                {studentIsAuth && (<>
                    <div className={style.item}>
                        <NavLink to="/student/cabinet"
                                 activeClassName={style.activeLink}>
                            Личный кабинет
                        </NavLink>
                    </div>
                    <div className={`${style.item} ${style.active}`}>
                        <NavLink to="/student/courses" activeClassName={style.activeLink}>
                            Мои курсы
                        </NavLink>
                    </div>
                    <div className={`${style.item} ${style.active}`}>
                        <NavLink to="/student/timetable" activeClassName={style.activeLink}>
                            Мое расписание
                        </NavLink>
                    </div>
                    <div className={`${style.item} ${style.active}`}>
                        <NavLink to="/student/notifications" activeClassName={style.activeLink}>
                            Уведомления
                            {Boolean(notifications) && (<IconButton aria-label="show 11 new notifications" color="inherit">
                                <Badge badgeContent={notifications} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>)}
                        </NavLink>
                    </div>
                    <div className={`${style.item} ${style.active}`}>
                        <NavLink to="/student/messages" activeClassName={style.activeLink}>
                            Сообщения
                            {Boolean(messages) && (
                                <IconButton aria-label="show 11 new notifications" color="inherit">
                                    <Badge badgeContent={messages} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                            )}
                        </NavLink>
                    </div>
                </>)}
            </div>
        </nav>
    );
};

export default Navbar;
