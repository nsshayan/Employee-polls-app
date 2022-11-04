import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {handleUserLogout} from "../actions/authedUser";

export const Navbar = ({dispatch, authedUserId}) => {
    const logout = (e) => {
        e.preventDefault();
        dispatch(handleUserLogout());
    }

    return (
        <Navbar className="flex justify-center space-x-4">
            <ul>
                <li>
                    <Link to="/" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home Page</Link>
                </li>
                <li>
                    <Link to="/leaderboard" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">User Leaderboard Page</Link>
                </li>
                <li>
                    <Link to="/new" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Create New Polls page</Link>
                </li>
                <li className="font-medium px-3 py-2 text-slate-700">User: {authedUserId}</li>

                <li>
                    <button onClick={logout} className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout</button>
                </li>
            </ul>
        </Navbar>
    );
}

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Navbar);
