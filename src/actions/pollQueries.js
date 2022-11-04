import {saveQuestion,saveQuestionAnswer} from "../utils/helper";
import {addResponseUser, addPollUser} from "./users";


export const ADD_POLL = "ADD_POLL";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_RESPONSE = "ADD_RESPONSE";

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    };
}

function addPoll(question) {
    return {
        type: ADD_POLL,
        question,
    };
}

export function handleAddPoll(option1, option2) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion(option1, option2, authedUser)
            .then((question) => {
                dispatch(addPoll(question));dispatch(addPollUser(question));})
    };

}

function addAnswerQuestion(author, qid, answer) {
    return {
        type: ADD_RESPONSE,
        author,
        qid,
        answer,
    };
}


export function handleAddResponse(questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return saveQuestionAnswer(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(addAnswerQuestion(authedUser.id, questionId, answer));
                dispatch(addResponseUser(authedUser.id, questionId, answer));
            });
    };
}
