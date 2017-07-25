import {combineReducers} from 'redux';
import account from './account';
import items from './items';

// import the rest of the reducers here to combine

const rootReducer = combineReducers({
    account, items
});

export default rootReducer;