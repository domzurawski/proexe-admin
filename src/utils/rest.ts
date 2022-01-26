import axios from 'axios';
import { API_ENDPOINT } from 'constants/endpoints';
import { hideModal } from 'store/actions/modalActions';
import { setUsers } from 'store/actions/usersActions';
import { store } from 'store/store';
import { IUser } from 'types';

export const getUsers = async () => {
    await axios
        .get(API_ENDPOINT + '/data')
        .then(({ data }) => store.dispatch(setUsers(data)))
        .catch((e) => console.log(e));
};

export const updateUser = async (updatedUser: IUser) => {
    const users = store.getState().usersReducer;

    await axios
        .put(API_ENDPOINT + '/data/' + updatedUser.id, { user: updatedUser })
        .then(({ data }) => {
            const updatedUsers: IUser[] = users.map((user: IUser) => {
                if (user.id === updatedUser.id) return updatedUser;
                return user;
            });

            store.dispatch(setUsers(updatedUsers));
            store.dispatch(hideModal());
            return data;
        })
        .catch((e) => console.log(e));
};

export const deleteUser = async (userId: number) => {
    const users = store.getState().usersReducer;

    await axios
        .delete(API_ENDPOINT + '/data/' + userId)
        .then(({ data }) => {
            const updatedUsers: IUser[] = users.filter(
                (user: IUser) => user.id !== userId
            );

            store.dispatch(setUsers(updatedUsers));
            store.dispatch(hideModal());
            return data;
        })
        .catch((e) => console.log(e));
};

export const addUser = async (newUser: IUser) => {
    const users = store.getState().usersReducer;

    await axios
        .post(API_ENDPOINT + '/data', { user: newUser })
        .then(({ data }) => {
            const updatedUsers: IUser[] = [newUser, ...users];

            store.dispatch(setUsers(updatedUsers));
            store.dispatch(hideModal());
            return data;
        })
        .catch((e) => console.log(e));
};
