import { LoadingActionTypes } from 'types';

export const startLoading = () => ({ type: LoadingActionTypes.START_LOADING });
export const stopLoading = () => ({ type: LoadingActionTypes.STOP_LOADING });
