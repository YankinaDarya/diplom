import React, {useState} from 'react';
import classNames from 'classnames/bind';
import TableHeader from './TableHeader/TableHeader';
import Row from './Row/Row';
import styles from './index.module.scss';
import {connect} from 'react-redux';
import {Button} from "@material-ui/core";
import {TimetableWeek} from '../../../../../types/types';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-block';

type PropsType = {
    timeTableData?: any;
};

const AdminTimetable = ({timeTableData}: PropsType) => {
    const [isField, setIsField] = useState(false);
    const handleSetIsField = () => {
        setIsField(!isField);
    };
    const renderRow = timeTableData.map(
        (obj, index) => <Row rowData={obj} rowNumber={index + 1}
                             key={index}/>);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__table-label`)}>Иванов Иван</h1>
            <div className={cn(`${COMPONENT_STYLE_NAME}__table-container`)}>
                <table className={cn(`${COMPONENT_STYLE_NAME}__table`)}>
                    <TableHeader/>
                    {renderRow}
                </table>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__buttons-container`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__buttons`)}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
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
                    onSubmit={() => {}}
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
};

type MapStateToPropsType = {
    timeTableData: Array<TimetableWeek>
};

const mapStateToProps = (state: any): MapStateToPropsType => {
    return {
        timeTableData: state.teacherTimetableReducer.timeTableData
    }
};

export default connect(mapStateToProps, null)(AdminTimetable);
