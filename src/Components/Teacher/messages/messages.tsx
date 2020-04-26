import React, {useState} from 'react';
import classNames from "classnames/bind";
import styles from "./messages.module.scss";
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Messages';

export const Messages = () => {
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [isField, setIsField] = useState(false);
    const handleSetIsField = () => {
        setIsField(true);
    };
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__header`)}>
                Мои сообщения
            </h1>
            <div className={cn(`${COMPONENT_STYLE_NAME}__title-container`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                    Сообщение 1
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
                <div>
                    Здравствуйте! Вопрос по заданию №1: что является конечным решением данной задачи?
                </div>
                <div onClick={handleSetIsField}>
                    <Button color="primary">Ответить</Button>
                </div>
            </div>
            {isField && <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
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
                                label="Введите сообщение"
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
