import React, {useEffect} from 'react';
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import {Button} from "@material-ui/core";
import {Form} from "react-final-form";
import {useSnackbar} from 'notistack';
import {connect} from "react-redux";
import {
    getErrorAddMessage,
    getTimetablesData,
    isAdding, isAdminPageLoading,
    isSuccessAdd
} from '../../../redux/admin/selectors';
import {formFields} from './constants';
import {
    addNewUserThunk,
    approveTimetableThunk,
    getTimetablesThunk,
    rejectTimetableThunk
} from "../../../redux/admin/thunks";
import {Action, TimetableWeek} from "../../../types/types";
import {NewUserType} from '../../../redux/admin/types';
import {AdminTimetable} from './_components/admin-timetable';
import {Preloader} from "../../Common/Preloader";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Admin';

type PropsType = {
    isAddLoading: boolean,
    error: string,
    isAddSuccess: boolean,
    addNewUser: Action<NewUserType>,
    getTimetables: Action<TimetableWeek>,
    rejectTimetable: Action<{ id: number, comment: string }>,
    approveTimetable: Action<number>,
    timetables: Array<{ lecId: number, name: string, timetable: Array<TimetableWeek> }>
    isLoading: boolean;
};

const AdminCabinet = ({isLoading, isAddLoading, error, isAddSuccess, addNewUser, getTimetables, timetables, rejectTimetable, approveTimetable}) => {
    useEffect(() => {
        getTimetables()
    }, []);
    const {enqueueSnackbar} = useSnackbar();
    useEffect(() => {
        if (isAddSuccess) {
            enqueueSnackbar('Пользователь успешно добавлен', {variant: "success"});
        }
        if (Boolean(error)) {
            enqueueSnackbar(`${error}`, {variant: "error"});
        }
    }, [isAddSuccess, error]);

    if(isLoading) {
        return <Preloader />
    }

    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <Form
                onSubmit={(values) => {
                    addNewUser(values);
                }}
                render={({handleSubmit, pristine, values}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                            <h1 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>
                                Добавить пользователя в систему
                            </h1>
                            {formFields.map((item, idx) => (
                                <div className={cn(`${COMPONENT_STYLE_NAME}__form-item`)}>
                                    {item.field}
                                </div>
                            ))}
                            <div className={cn(`${COMPONENT_STYLE_NAME}__form-button`)}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={isAddLoading}
                                >
                                    Добавить
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            />
            <div className={cn(`${COMPONENT_STYLE_NAME}__timetables-container`)}>
                <h1 className={cn(`${COMPONENT_STYLE_NAME}__timetable-label`)}>Расписания преподавателей</h1>
                {timetables.length === 0 && <div>
                    Ни один преподаватель еще не прислал расписание
                </div>}
                {timetables.map((item) => <AdminTimetable timetable={item.timetable} name={item.name} id={item.lecId}
                                                          rejectTimetable={rejectTimetable}
                                                          approveTimetable={approveTimetable}
                                                          key={item.lecId}/>)}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAddLoading: isAdding(state),
    error: getErrorAddMessage(state),
    isAddSuccess: isSuccessAdd(state),
    timetables: getTimetablesData(state),
    isLoading: isAdminPageLoading(state),
});

export default connect(mapStateToProps, {
    addNewUser: addNewUserThunk, getTimetables: getTimetablesThunk,
    approveTimetable: approveTimetableThunk, rejectTimetable: rejectTimetableThunk
})(AdminCabinet);
