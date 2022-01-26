import { IUser, IUserAction, UsersActionTypes } from 'types';

const initialState: IUser[] = [];

export const usersReducer = (state = initialState, action: IUserAction) => {
    switch (action.type) {
        case UsersActionTypes.SET_USERS:
            return action.payload;
        default:
            return state;
    }
};
