import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import TemplateProvider from "./template/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TemplateProvider>
        <ContextProvider>
          <Router>
            <App />
          </Router>
        </ContextProvider>
      </TemplateProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
