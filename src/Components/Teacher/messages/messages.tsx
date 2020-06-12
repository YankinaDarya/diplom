import React, {useEffect} from 'react';
import classNames from "classnames/bind";
import styles from "./messages.module.scss";
import {Preloader} from "../../Common/Preloader";
import {
    getTeacherId, getTeacherMessages,
    getTeacherPageLoading,
    getTeacherFullName
} from "../../../redux/Teacher/selectors/teacher-cabinet-selector";
import {connect} from "react-redux";
import {
    getInitializeTeacherMessagesThunk,
    readTeacherMessageThunk
} from "../../../redux/Teacher/thunks";
import { MessageChain } from './message-chain';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Messages';

const MessagesPageView = ({fullName, messages, getTeacherMessages, id, readMessage, isTeacherPageLoading}) => {
    useEffect(() => {
        getTeacherMessages(id)
    }, []);
    if(isTeacherPageLoading) {
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
                                                               teacherId={id}
                                                               messages={message}
                                                               fullName={fullName}
                />)}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    messages: getTeacherMessages(state),
    id: getTeacherId(state),
    isTeacherPageLoading: getTeacherPageLoading(state),
    fullName: getTeacherFullName(state),
});

export default connect(mapStateToProps, {
    getTeacherMessages: getInitializeTeacherMessagesThunk,
    readMessage: readTeacherMessageThunk,
})(MessagesPageView);
