export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser,
    };
}

export function handleUserLogin(username, password) {
        return (dispatch, getState) => {
        const { users } = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!!user) {
            sessionStorage.setItem("authedUser", JSON.stringify(user));
            return dispatch(setAuthedUser(user));
        }
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    };
}

export function handleUserLogout(){
        return (dispatch) => {
        sessionStorage.removeItem("authedUser");
        return dispatch(logoutUser());
    }

}