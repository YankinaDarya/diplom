import React, {useState, memo, useCallback} from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import {Button} from "@material-ui/core";
import {Action, TimetableWeek} from '../../../../../types/types';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import {SimpleTimetable} from "../../../../Common/simple-timetable";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-block';

type PropsType = {
    timetable: Array<TimetableWeek>;
    name: string;
    id: number;
    rejectTimetable: Action<{ id: number, comment: string }>,
    approveTimetable: Action<number>,
};

export const AdminTimetable = memo(({timetable, name, id, rejectTimetable, approveTimetable}: PropsType) => {
    const [isField, setIsField] = useState(false);
    const handleSetIsField = () => {
        setIsField(!isField);
    };
    const handleReject = useCallback((values) => {
        rejectTimetable({comment: values.answer, id: id});
    }, [rejectTimetable, id]);
    const handleApprove = useCallback(() => {
        approveTimetable(id);
    }, [approveTimetable, id]);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__table-label`)}>{name}</h1>
            <div className={cn(`${COMPONENT_STYLE_NAME}__table-container`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__table`)}>
                    <SimpleTimetable timeTableData={timetable}/>
                </div>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__buttons-container`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__buttons`)}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleApprove}
                        /*disabled={submitting}*/
                    >
                        Одобрить
                    </Button>
                    <div onClick={handleSetIsField}>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        /*disabled={submitting}*/
                    >
                        {isField ? "Отменить" : "Отклонить"}
                    </Button>
                    </div>
                </div>
            </div>
            {isField && <div className={cn(`${COMPONENT_STYLE_NAME}__reject-field-container`)}>
                <Form
                    onSubmit={handleReject}
                    render={({handleSubmit, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <Field
                                fullWidth
                                name="answer"
                                component={TextField}
                                type="text"
                                rows={6}
                                label="Введите причину отказа"
                                id="outlined-multiline-static"
                                multiline
                                variant="outlined"
                            />
                            <div className={cn(`${COMPONENT_STYLE_NAME}__submit-button`)}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    Отправить
                                </Button>
                            </div>
                        </form>
                    )}
                />
            </div>}
        </div>
    );
});
