import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import App from './App';
import LoginViewContainer from "./LoginViewContainer";
import SignUpContainer from "./SignUpContainer";

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'}
                       component={App}/>
                <Route path={process.env.PUBLIC_URL + '/login'}
                       component={withRouter(LoginViewContainer)}/>
                <Route path={process.env.PUBLIC_URL + '/signup'}
                       component={withRouter(SignUpContainer)}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Root;