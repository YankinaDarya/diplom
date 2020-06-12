import React, {useEffect} from 'react';
import classNames from "classnames/bind";
import styles from "./NotificationPage.module.scss";
import Switch from '@material-ui/core/Switch';
import {getTeacherNotificationsThunk, readTeacherNotificationsThunk} from "../../../redux/Teacher/thunks";
import {connect} from "react-redux";
import {
    getTeacherId,
    getTeacherNotifications,
    getTeacherPageLoading
} from "../../../redux/Teacher/selectors/teacher-cabinet-selector";
import {Action} from "../../../types/types";
import {Preloader} from "../../Common/Preloader";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Notifications';

type NotificationType = {
    from_name: string;
    from_role: string;
    id: number;
    is_read: boolean;
    notification: string;
    ts: string;
};

type PropsType = {
    id: number;
    notifications: Array<NotificationType>;
    getTeacherNotifications: Action<number>;
    readNotification: Action<number>;
    isTeacherPageLoading: boolean;
};

const NotificationPageView = ({notifications, getTeacherNotifications, id, readNotification, isTeacherPageLoading}) => {

    useEffect(() => {
        getTeacherNotifications(id)
    }, []);

    if(isTeacherPageLoading) {
        return <Preloader />
    }
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__header`)}>
                Мои уведомления
            </h1>
            {notifications.map((not, index) => <>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__title-container`)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                            {`Уведомление ${index + 1}`}
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__switch-container`)}>
                    <span className={cn(`${COMPONENT_STYLE_NAME}__switch-title`)}>
                        Прочитано
                    </span>
                            <Switch
                                checked={not.is_read}
                                onChange={() => {readNotification(not.id, id)}}
                                name="checkedA"
                                inputProps={{'aria-label': 'secondary checkbox'}}
                            />
                        </div>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__data`)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__name-block`)}>
                            {Boolean(not.from_role) ? `От: ${not.from_name} ${not.from_role}` : `От ${not.from_name}`}
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__date-block`)}>
                            {not.ts}
                        </div>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                        {not.notification}
                    </div>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    notifications: getTeacherNotifications(state),
    id: getTeacherId(state),
    isTeacherPageLoading: getTeacherPageLoading(state),
});

export default connect(mapStateToProps, {
    getTeacherNotifications: getTeacherNotificationsThunk,
    readNotification: readTeacherNotificationsThunk,
})(NotificationPageView);
