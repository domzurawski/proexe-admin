import UserList from 'components/UserList';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { getUsers } from 'utils/rest';
import { useSelector } from 'react-redux';
import { RootState } from 'types';
import Modal from 'components/Modal';

export default function App() {
    const users = useSelector((state: RootState) => state.usersReducer);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <MainLayout>
            <h1 className="font-bold text-neutral-800 text-2xl mb-4">
                Dashboard
            </h1>
            <UserList users={users} />
            <Modal />
        </MainLayout>
    );
}
