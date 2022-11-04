import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from "react-router-dom";
import authedUser from "./reducers/authedUser";
import users from "./reducers/users";
import questions from "./reducers/pollQuestions";

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions,

  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>
);
