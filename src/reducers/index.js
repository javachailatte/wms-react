import { combineReducers } from 'redux';
import stuff from './stuff';

// import the rest of the reducers here to combine

const rootReducer = combineReducers({
    stuff
});

export default rootReducer;