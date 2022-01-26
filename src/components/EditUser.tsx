import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from 'store/actions/modalActions';
import { INewUser, IUser } from 'types';
import { updateUser } from 'utils/rest';
import { Button } from './Button';

type Props = {
    user: IUser;
};

export default function EditUser({ user }: Props) {
    const dispatch = useDispatch();

    const [updatedUser, setUpdatedUser] = useState<INewUser>({
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // fake assignment to walkaround type difference to simplify task
        const userToAdd: IUser = {
            ...user,
            name: updatedUser.name,
            username: updatedUser.username,
            email: updatedUser.email,
            address: {
                ...user.address,
                city: updatedUser.city,
            },
        };

        updateUser(userToAdd);
    };

    return (
        <>
            <h1 className="font-semibold text-xl mb-4">Add user</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-neutral-700 focus:outline-none focus:shadow-outline"
                        type="text"
                        value={updatedUser.name}
                        name="name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-neutral-700 focus:outline-none focus:shadow-outline"
                        type="text"
                        value={updatedUser.username}
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        City
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-neutral-700 focus:outline-none focus:shadow-outline"
                        type="text"
                        value={updatedUser.city}
                        name="city"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-neutral-700 focus:outline-none focus:shadow-outline"
                        type="email"
                        value={updatedUser.email}
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex">
                    <Button
                        onClick={() => dispatch(hideModal())}
                        className="flex-1 bg-white border hover:bg-neutral-100 border-neutral-500 text-neutral-900 mr-2"
                    >
                        Cancel
                    </Button>
                    <Button className="flex-1 bg-yellow-500">Edit</Button>
                </div>
            </form>
        </>
    );
}
