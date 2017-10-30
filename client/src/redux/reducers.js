import {combineReducers} from 'redux';
import itemsReducer from './modules/items';
import client from '../config/apolloClient';

export default combineReducers({
    items: itemsReducer,
    apollo: client.reducer()
})