import React, {useState} from 'react';
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import {getFormattedDate, getFormattedTime} from '../../../../utils';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Messages-chain';

export const MessageChain = ({messages, studentId, readMessage, fullName, studentAnswer}) => {
    const [isField, setIsField] = useState(false);
    const [curChain, setCurChain] = useState(0);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
                Диалог с {messages[0].from_name === fullName ? messages[0].to_name : messages[0].from_name}
            </div>
            {messages.map((mes, index) => <>
                    <div className={cn(`${COMPONENT_STYLE_NAME}__message-container`, {
                        [
                            `${COMPONENT_STYLE_NAME}__message-container--my-message`]: messages[index].from_name === fullName
                    })}>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__data`)}>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__date-block`)}>
                                {getFormattedDate(mes.ts)}
                                <span className={cn(`${COMPONENT_STYLE_NAME}__time`)}>
                                {getFormattedTime(mes.ts)}
                            </span>
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__title-container`)}>
                                {messages[index].from_name !== fullName && (
                                    <div className={cn(`${COMPONENT_STYLE_NAME}__switch-container`)}>
                                <span className={cn(`${COMPONENT_STYLE_NAME}__switch-title`)}>
                                    Прочитано
                                </span>
                                        <Switch
                                            checked={mes.is_read}
                                            onChange={() => {
                                                readMessage(mes.id, studentId)
                                            }}
                                            name="checkedA"
                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={cn(`${COMPONENT_STYLE_NAME}__data-block`)}>
                            {mes.message}
                            {messages[index].from_name !== fullName && (<div onClick={() => {
                                setIsField(true);
                                setCurChain(mes.chain_num);
                            }}>
                                <Button color="primary">Ответить</Button>
                            </div>)}
                        </div>
                    </div>
                </>
            )}
            {isField && <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                <Form
                    onSubmit={(values) => {
                        studentAnswer(studentId, values.message, curChain)
                    }}
                    render={({handleSubmit, submitting}) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <Field
                                fullWidth
                                name="message"
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
