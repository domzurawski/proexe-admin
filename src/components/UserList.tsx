import { SwitchVerticalIcon } from '@heroicons/react/outline';
import { IUser, SortingOptions } from 'types';
import EmptyUserList from './EmptyUserList';
import UserListElement from './UserListElement';
import UsersHeading from './UsersHeading';

type Props = {
    users: IUser[];
    toggleSort: (column: SortingOptions) => void;
};

const COLUMNS = [
    { value: 'id', name: 'ID', sortingOption: SortingOptions.ID },
    { value: 'name', name: 'Name', sortingOption: SortingOptions.NAME },
    {
        value: 'username',
        name: 'Username',
        sortingOption: SortingOptions.USERNAME,
    },
    { value: 'email', name: 'Email', sortingOption: SortingOptions.EMAIL },
];

export default function UserList({ users, toggleSort }: Props) {
    return (
        <>
            <UsersHeading />
            <div className="my-4 border shadow-sm rounded-xl">
                <div className="hidden md:grid grid-cols-7 gap-x-3 px-4 py-4 border-b text-center bg-yellow-500 rounded-t-xl text-white">
                    {COLUMNS.map((col) => {
                        return (
                            <div
                                key={col.name}
                                onClick={() => toggleSort(col.sortingOption)}
                                className="mx-auto cursor-pointer"
                            >
                                <div className="flex items-center">
                                    {col.name}{' '}
                                    <SwitchVerticalIcon className="h-4 w-4 ml-2" />
                                </div>
                            </div>
                        );
                    })}

                    <div>City</div>
                    <div>Edit</div>
                    <div>Delete</div>
                </div>

                {users.length > 0 ? (
                    users.map((user: IUser) => (
                        <UserListElement key={user.id} user={user} />
                    ))
                ) : (
                    <EmptyUserList />
                )}
            </div>
        </>
    );
}
