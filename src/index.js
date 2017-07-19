import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root';
import {unregister} from './registerServiceWorker';
import configureStore from "./configureStore";

const store = configureStore();
window.store = store;

render(
    <Root store={store} />,
    document.getElementById('root')
);

// TODO: I don't think we need this but I haven't done enough research
unregister();
