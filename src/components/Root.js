import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import LoginView from './LoginView';

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={LoginView} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Root;