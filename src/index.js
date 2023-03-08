import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './_components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './_store';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: orange;
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();