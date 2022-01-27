export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
}

export interface INewUser {
    name: string;
    username: string;
    email: string;
    city: string;
}

export interface RootState {
    usersReducer: IUser[];
    modalReducer: IModalState;
    loadingReducer: boolean;
}

export enum UsersActionTypes {
    SET_USERS = 'SET_USERS',
}

export interface IUserAction {
    type: UsersActionTypes;
    payload: IUser[];
}

export interface IModalState {
    isOpen: boolean;
    component: React.ReactChild | null;
}

export enum ModalActionTypes {
    SHOW_MODAL = 'SHOW_MODAL',
    HIDE_MODAL = 'HIDE_MODAL',
}

export interface IModalAction {
    type: ModalActionTypes;
    payload: IModalState;
}

export interface ISort {
    type: SortUsersTypes;
    column: string;
}

export enum SortUsersTypes {
    ASC = 'asc',
    DESC = 'desc',
}

export enum SortingOptions {
    ID = 'id',
    NAME = 'name',
    USERNAME = 'username',
    EMAIL = 'email',
    CITY = 'address.city',
}

export enum LoadingActionTypes {
    START_LOADING = 'START_LOADING',
    STOP_LOADING = 'STOP_LOADING',
}

export interface ILoadingAction {
    type: LoadingActionTypes;
}
