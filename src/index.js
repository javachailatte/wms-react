import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers'
import Root from './components/Root';
//import registerServiceWorker from './registerServiceWorker';
// import './index.css';

const store = createStore(reducer);

render(
    <Root store={store} />,
    document.getElementById('root')
);

// TODO: I don't think we need this but I haven't done enough research
//registerServiceWorker();
