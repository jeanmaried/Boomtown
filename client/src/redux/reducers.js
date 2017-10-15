import {combineReducers} from 'redux';
import itemsReducer from './modules/items';
import usersReducer from './modules/users';

export default combineReducers({
    items: itemsReducer,
    users: usersReducer
})