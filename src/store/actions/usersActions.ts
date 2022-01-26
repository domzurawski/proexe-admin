import { IUser, IUserAction, UsersActionTypes } from 'types';

export const setUsers = (users: IUser[]): IUserAction => ({
    type: UsersActionTypes.SET_USERS,
    payload: users,
});
