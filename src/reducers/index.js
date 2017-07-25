import {combineReducers} from 'redux';
import account from './account';
import create from './create';
import items from './items';
import view from "./view";

// import the rest of the reducers here to combine

const rootReducer = combineReducers({
    account, create, items, view
});

export default rootReducer;