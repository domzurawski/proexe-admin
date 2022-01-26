import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { usersReducer } from './usersReducer';

const reducers = combineReducers({
    usersReducer,
    modalReducer,
});

export default reducers;
