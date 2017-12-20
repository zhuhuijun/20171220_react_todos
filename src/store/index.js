import {createStore, combineReducers} from 'redux';
import {todos, filter} from './reducers';

let reducer = combineReducers({
    todos,
    filter
})
let store = createStore(reducer);

export default store;
