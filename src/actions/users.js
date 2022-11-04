export const GET_USERS = "GET_USERS";
export const ADD_RESPONSE_USER = "ADD_RESPONSE_USER";
export const ADD_POLL_USER = "ADD_POLL_USER";
export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    };
}

export function addResponseUser(authedUser, qid, answer) {
    return {
        type: ADD_RESPONSE_USER,
        authedUser,
        qid,
        answer,
    };
}

export function addPollUser({author, id}) {
    return {
        type: ADD_POLL_USER,
        author,
        qid: id,
    };
}
