import React, {useState} from 'react';
import classNames from "classnames/bind";
import styles from "./student-notifications.module.scss";
import Switch from '@material-ui/core/Switch';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Notifications';

export const StudentNotifications = () => {
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__header`)}>
                Мои уведомления
            </h1>
            <div className={cn(`${COMPONENT_STYLE_NAME}__title-container`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                    Уведомление 1
                </div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__switch-container`)}>
                    <span className={cn(`${COMPONENT_STYLE_NAME}__switch-title`)}>
                        Прочитано
                    </span>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </div>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                В этот четверг занятия по курсу веб-разработка не будет по причине болезни преподавателя
            </div>
        </div>
    );
};
