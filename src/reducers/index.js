import {combineReducers} from 'redux';
import account from './account';
import create from './create';
import items from './items';
import view from "./view";
import list from "./list";

// import the rest of the reducers here to combine

const rootReducer = combineReducers({
    account, create, list, items, view
});

export default rootReducer;