import React, {useEffect} from 'react';
import classNames from "classnames/bind";
import styles from "./messages.module.scss";
import {Preloader} from "../../Common/Preloader";
import {connect} from "react-redux";
import { MessageChain } from './message-chain';
import { getStudentPageLoading, getStudentId, getStudentFullName } from '../../../redux/student/cabinet-module/selectors';
import { getStudentMessages } from '../../../redux/student/notifications-module/selectors';
import { getInitializeStudentMessagesThunk, readStudentMessageThunk, studentAnswerThunk } from '../../../redux/student/notifications-module/thunks';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Messages';

const MessagesPageView = ({fullName, messages, getStudentMessages, id, readMessage, isStudentPageLoading, studentAnswer}) => {
    useEffect(() => {
        getStudentMessages(id)
    }, []);
    if(isStudentPageLoading) {
        return <Preloader />
    }
    const messagesArrays = Object.values(messages);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__header`)}>
                Мои сообщения
            </h1>
            <div className={cn(`${COMPONENT_STYLE_NAME}__chain-block`)}>
                {messagesArrays.map((message) => <MessageChain readMessage={readMessage}
                                                               studentId={id}
                                                               messages={message}
                                                               fullName={fullName}
                                                               studentAnswer={studentAnswer}
                />)}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    messages: getStudentMessages(state),
    id: getStudentId(state),
    isStudentPageLoading: getStudentPageLoading(state),
    fullName: getStudentFullName(state),
});

export const StudentMessages = connect(mapStateToProps, {
    getStudentMessages: getInitializeStudentMessagesThunk,
    readMessage: readStudentMessageThunk,
    studentAnswer: studentAnswerThunk,
})(MessagesPageView);
