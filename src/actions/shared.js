import {getUsers} from "./users";
import {getQuestions} from "./pollQueries";
import {getInitialData} from "../utils/helper";
import {setAuthedUser} from "./authedUser";

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(({users,questions})=>{
            dispatch(setAuthedUser(JSON.parse(sessionStorage.getItem("authedUser"))));
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
        })
    }
}