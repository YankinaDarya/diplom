import React, {useState, useMemo, useCallback} from 'react';
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Messages-chain';

export const MessageChain = ({messages, teacherId, readMessage, fullName}) => {
    const [isField, setIsField] = useState(false);
    const handleSetIsField = () => {
        setIsField(true);
    };
    const isPrep = useCallback((index) => messages[index].from_name === fullName, [messages]);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                Диалог с {isPrep(0) ? messages[0].to_name : messages[0].from_name}
            </div>
            {messages.map((mes, index) => <>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__title-container`)}>
                        {!isPrep(index) && (
                            <div className={cn(`${COMPONENT_STYLE_NAME}__switch-container`)}>
                    <span className={cn(`${COMPONENT_STYLE_NAME}__switch-title`)}>
                        Прочитано
                    </span>
                                <Switch
                                    checked={mes.is_read}
                                    onChange={() => {
                                        readMessage(mes.id, teacherId)
                                    }}
                                    name="checkedA"
                                    inputProps={{'aria-label': 'secondary checkbox'}}
                                />
                            </div>
                        )}
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__data`)}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__name-block`)}>
                            От: {mes.from_name}
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__name-block`)}>
                            Кому: {mes.to_name}
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__date-block`)}>
                            {mes.ts}
                        </div>
                    </div>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                        {mes.message}
                        {!isPrep(index) && (<div onClick={handleSetIsField}>
                            <Button color="primary">Ответить</Button>
                        </div>)}
                    </div>
                </>
            )}
            {isField && <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                <Form
                    onSubmit={() => {
                    }}
                    render={({handleSubmit, submitting}) => (
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
