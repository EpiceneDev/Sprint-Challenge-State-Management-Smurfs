import React from "react";
import ReactDOM from "react-dom";
import createStore from 'redux';
import {Provider} from 'react-redux';
import "./index.css";
import App from "./components/App";

const store = createStore(reducer);

ReactDOM.render(
<Provider state={state}>
    <App />
</Provider>, document.getElementById("root"));
