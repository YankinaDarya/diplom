import React, { useEffect } from 'react';
import classNames from "classnames/bind";
import styles from "./student-notifications.module.scss";
import Switch from '@material-ui/core/Switch';
import {connect} from "react-redux";
import { getStudentId, getStudentPageLoading } from '../../../redux/student/cabinet-module/selectors';
import { getStudentNotifications } from '../../../redux/student/notifications-module/selectors';
import { getStudentNotificationsThunk, readStudentNotificationsThunk } from '../../../redux/student/notifications-module/thunks';
import {Preloader} from "../../Common/Preloader";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Notifications';

export const StudentNotificationsView = ({notifications, getStudentNotifications, id, readNotification, isStudentPageLoading}) => {
    useEffect(() => {
        getStudentNotifications(id)
    }, []);

    if(isStudentPageLoading) {
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
    notifications: getStudentNotifications(state),
    id: getStudentId(state),
    isStudentPageLoading: getStudentPageLoading(state),
});

export default connect(mapStateToProps, {
    getStudentNotifications: getStudentNotificationsThunk,
    readNotification: readStudentNotificationsThunk,
})(StudentNotificationsView);
