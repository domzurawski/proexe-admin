import { useDispatch } from 'react-redux';
import { showModal } from 'store/actions/modalActions';
import { IUser } from 'types';
import { Button } from './Button';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';

type Props = {
    user: IUser;
};

export default function UserListElement({ user }: Props) {
    const dispatch = useDispatch();

    return (
        <div className="hover:bg-neutral-100 px-4 py-3 grid space-y-2 border-b last:border-b-0 md:space-y-0 md:grid-cols-7 md:gap-x-3 md:items-center md:text-center">
            <div className="flex justify-between md:block text-gray-500">
                <label className="md:hidden sm:flex-1">ID: </label>
                <p className="sm:flex-1 truncate">{user.id}</p>
            </div>
            <div className="flex justify-between md:block text-gray-500">
                <label className="md:hidden sm:flex-1">Name: </label>
                <p className="sm:flex-1 truncate">{user.name}</p>
            </div>
            <div className="flex justify-between md:block text-gray-500">
                <label className="md:hidden sm:flex-1">Username: </label>
                <p className="sm:flex-1 truncate">{user.username}</p>
            </div>
            <div className="flex justify-between md:block text-gray-500">
                <label className="md:hidden sm:flex-1">Email: </label>
                <p className="sm:flex-1 truncate">{user.email}</p>
            </div>
            <div className="flex justify-between md:block text-gray-500">
                <label className="md:hidden sm:flex-1">City: </label>
                <p className="sm:flex-1 truncate">{user.address.city}</p>
            </div>

            <div className="sm:flex md:hidden">
                <Button
                    onClick={() =>
                        dispatch(showModal(<EditUser user={user} />))
                    }
                    className="w-full bg-white border border-yellow-500 text-yellow-500 mb-2 sm:mb-0 sm:mr-2"
                >
                    Edit
                </Button>
                <Button
                    onClick={() =>
                        dispatch(showModal(<DeleteUser user={user} />))
                    }
                    className="w-full bg-red-700"
                >
                    Delete
                </Button>
            </div>

            <div className="hidden md:block text-gray-500">
                <Button
                    onClick={() =>
                        dispatch(showModal(<EditUser user={user} />))
                    }
                    className="bg-white border border-yellow-500 text-yellow-500 md:mx-auto"
                >
                    Edit
                </Button>
            </div>
            <div className="hidden md:block text-gray-500">
                <Button
                    onClick={() =>
                        dispatch(showModal(<DeleteUser user={user} />))
                    }
                    className="bg-red-700 md:mx-auto"
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}
