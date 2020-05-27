import React, { useEffect } from 'react';
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import {Button} from "@material-ui/core";
import {Form} from "react-final-form";
import {useSnackbar} from 'notistack';
import AdminTimetable from "./_components/admin-timetable";
import {connect} from "react-redux";
import {getErrorAddMessage, isAdding, isSuccessAdd} from '../../../redux/admin/selectors';
import {formFields} from './constants';
import {addNewUserThunk} from "../../../redux/admin/thunks";
import {Action} from "../../../types/types";
import {NewUserType} from '../../../redux/admin/types';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Admin';

type PropsType = {
    isAddLoading: boolean,
    error: string,
    isAddSuccess: boolean,
    addNewUser: Action<NewUserType>,
};

const AdminCabinet = ({isAddLoading, error, isAddSuccess, addNewUser}) => {
    const {enqueueSnackbar} = useSnackbar();
    useEffect(() => {
        if (isAddSuccess) {
            enqueueSnackbar('Пользователь успешно добавлен', {variant: "success"});
        }
        if(Boolean(error)) {
            enqueueSnackbar(`${error}`, {variant: "error"});
        }
    }, [isAddSuccess, error]);
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
                <h1 className={cn(`${COMPONENT_STYLE_NAME}__label`)}>Расписания преподавателей</h1>
                <AdminTimetable/>
                <AdminTimetable/>
                <AdminTimetable/>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAddLoading: isAdding(state),
    error: getErrorAddMessage(state),
    isAddSuccess: isSuccessAdd(state),
});

export default connect(mapStateToProps, {addNewUser: addNewUserThunk})(AdminCabinet);
