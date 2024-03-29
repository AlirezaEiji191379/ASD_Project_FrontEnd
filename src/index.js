import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './_components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import {userReducer} from "./_reducers/userReducers";
import {Provider} from "react-redux";
import thunk from "redux-thunk"

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(userReducer,
    applyMiddleware(
        thunk
    ));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
