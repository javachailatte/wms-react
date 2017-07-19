import {combineReducers} from 'redux';
import login from './login';

// import the rest of the reducers here to combine

const rootReducer = combineReducers({
    login
});

export default rootReducer;