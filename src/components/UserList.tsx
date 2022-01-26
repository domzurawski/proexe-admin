import { IUser } from 'types';
import EmptyUserList from './EmptyUserList';
import UserListElement from './UserListElement';
import UsersHeading from './UsersHeading';

type Props = {
    users: IUser[];
};

export default function UserList({ users }: Props) {
    return (
        <>
            <UsersHeading />
            <div className="my-4 border shadow-sm rounded-xl">
                <div className="hidden md:grid grid-cols-7 gap-x-3 px-4 py-4 border-b text-center bg-yellow-500 rounded-t-xl text-white">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Username</div>
                    <div>Email</div>
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
