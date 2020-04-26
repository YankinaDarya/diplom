import {Action} from "../../../types/types";

export const SEND_QUESTION = 'SEND_QUESTION';
export const sendQuestionAction: Action<any> = (payload) => ({
    type: SEND_QUESTION,
    payload,
});
