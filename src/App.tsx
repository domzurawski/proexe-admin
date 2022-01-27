import UserList from 'components/UserList';
import MainLayout from './layouts/MainLayout';
import { useEffect, useMemo, useState } from 'react';
import { getUsers } from 'utils/rest';
import { useSelector } from 'react-redux';
import { ISort, IUser, RootState, SortingOptions, SortUsersTypes } from 'types';
import sortObjectsArray from 'sort-objects-array';
import Loading from 'components/Loading';
import { DEFAULT_SORT } from 'constants/sort';

export default function App() {
    const users = useSelector((state: RootState) => state.usersReducer);
    const loading = useSelector((state: RootState) => state.loadingReducer);

    const [sortColumns, setSortColumns] = useState<ISort>(DEFAULT_SORT);

    const sortedUsers: IUser[] = useMemo(
        () =>
            sortObjectsArray(users, sortColumns.column, sortColumns.type, {
                caseinsensitive: false,
            }),
        [sortColumns, users]
    );

    useEffect(() => {
        getUsers();
    }, []);

    const toggleSort = (column: SortingOptions) => {
        if (sortColumns.type === SortUsersTypes.DESC)
            return setSortColumns({ type: SortUsersTypes.ASC, column });
        return setSortColumns({ type: SortUsersTypes.DESC, column });
    };

    return (
        <MainLayout>
            <h1 className="font-bold text-neutral-800 text-2xl mb-4">
                Dashboard
            </h1>
            {!loading ? (
                <UserList users={sortedUsers} toggleSort={toggleSort} />
            ) : (
                <Loading />
            )}
        </MainLayout>
    );
}
