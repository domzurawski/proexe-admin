import { ILoadingAction, LoadingActionTypes } from 'types';

const initialState: boolean = true;

export const loadingReducer = (
    state = initialState,
    action: ILoadingAction
) => {
    switch (action.type) {
        case LoadingActionTypes.START_LOADING:
            return true;
        case LoadingActionTypes.STOP_LOADING:
            return false;
        default:
            return state;
    }
};
