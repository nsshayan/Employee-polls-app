import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import {handleUserLogin} from "../actions/authedUser";

const UserLogin = ({dispatch, login}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    if (login) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
    }

    const handleUser = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        console.log("In submit function");
        e.preventDefault();
        dispatch(handleUserLogin(username, password));
        setUsername("");
        setPassword("");
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mt-9">Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
                <input
                    value={username}
                    onChange={handleUser}
                    type="text"
                    id="username"
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                />
                <br/>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                <input
                    value={password}
                    onChange={handlePassword}
                    type="password"
                    id="password"
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                />
                <br/>
                <button type="submit"
                className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">Login</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({authedUser}) => ({login: !!authedUser,});

export default connect(mapStateToProps)(UserLogin);