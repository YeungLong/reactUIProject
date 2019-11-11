import React from "react";
import ReactDom from 'react-dom';
import { BrowserRouter, HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";

//import { routes } from "./routes/routes.js";
import store from "./store/store.js";
import "./public/styles/common.less";

// const history = syncHistoryWithStore(HashHistory, store);
// const history = createHistory();
//import Index from "./containers/Index";
import Login from "./containers/Login"
import Main from "./containers/Main"

ReactDom.render(
    (<Provider store={store}>
        <HashRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/main" component={Main}/>
                </Switch>
            </div>
        </HashRouter>
    </Provider>),
    document.getElementById('app')
)



