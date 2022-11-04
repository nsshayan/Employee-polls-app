import {combineReducers} from "@reduxjs/toolkit";
import authedUser from "./authedUser";
import questions from "./pollQuestions";
import users from "./users";

export default combineReducers({
    authedUser,
    users,
    questions,
});
