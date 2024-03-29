import React from "react";
import { Provider } from "react-redux";
import Greeting from "./Greeting";
import store from "../store";

const App = () => { 
    return (
        <Provider store={store}>
            <Greeting />
        </Provider>
    )
}

export default App;