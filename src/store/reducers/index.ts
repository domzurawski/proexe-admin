import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { modalReducer } from './modalReducer';
import { usersReducer } from './usersReducer';

const reducers = combineReducers({
    usersReducer,
    modalReducer,
    loadingReducer,
});

export default reducers;
