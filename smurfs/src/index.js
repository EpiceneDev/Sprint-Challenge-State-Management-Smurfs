import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import "./index.css";
import App from "./components/App";
import { reducer } from './reducers/reducer'

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
