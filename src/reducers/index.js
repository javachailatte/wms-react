import {combineReducers} from 'redux';
import account from './account';

// import the rest of the reducers here to combine

const rootReducer = combineReducers({
    account
});

export default rootReducer;