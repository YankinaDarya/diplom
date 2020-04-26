import React, {useState} from 'react';
import classNames from "classnames/bind";
import styles from "./NotificationPage.module.scss";
import Switch from '@material-ui/core/Switch';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Notifications';

export const NotificationPage = () => {
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
                Студент Иван Иванович Петров сдал 1 задание по курсу веб-разработка
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__title-container`)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                Уведомление 2
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__switch-container`)}>
                    <span className={cn(`${COMPONENT_STYLE_NAME}__switch-title`)}>
                        Прочитано
                    </span>
                <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                Студент Константин Сидоров сдал 1 задание по курсу веб-разработка
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__title-container`)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                Уведомление 3
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__switch-container`)}>
                    <span className={cn(`${COMPONENT_STYLE_NAME}__switch-title`)}>
                        Прочитано
                    </span>
                <Switch
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                Студент Елена Смирнова сдал 1 задание по курсу веб-разработка
            </div>
        </div>
    );
};
