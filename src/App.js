import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import CreateNewPoll from "./components/CreateNewPoll";
import QuestionsPollPage from "./components/QuestionsPollPage";
import {useEffect} from "react";
import UserLogin from "./components/UserLogin";
import {handleInitialData} from "./actions/shared";
import Leaderboard from "./components/Leaderboard";


function App({dispatch, login}) {

    useEffect(() => {
        dispatch(handleInitialData());
    });

  return (
    <div className="container mx-auto py-4">

        {
            !(login) ? <UserLogin/> :
            <>
                <Navbar/>
                <Routes>
                <Route path="/" exact element={<MainDashboard/>}></Route>
                <Route path="/leaderboard" exact element={<Leaderboard/>}></Route>
                <Route path="/questions/:id" exact element={<QuestionsPollPage/>}></Route>
                <Route path="/new" exact element={<CreateNewPoll/>}></Route>
                </Routes>
            </>
        }
    </div>
  );
}

const mapStateToProps = ({authedUser}) => ({login: !!authedUser});

export default connect(mapStateToProps)(App);
