import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'store/actions/modalActions';
import { INewUser, IUser, RootState } from 'types';
import { addUser } from 'utils/rest';
import { Button } from './Button';

export default function AddUser() {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.usersReducer);

    const [newUser, setNewUser] = useState<INewUser>({
        name: '',
        username: '',
        email: '',
        city: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // assignment to walkaround type difference to simplify task
        const userToAdd: IUser = {
            id: users.length + 1,
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            phone: '',
            website: '',
            address: {
                city: newUser.city,
                geo: {
                    lat: '',
                    lng: '',
                },
                street: '',
                suite: '',
                zipcode: '',
            },
            company: {
                bs: '',
                catchPhrase: '',
                name: '',
            },
        };

        addUser(userToAdd);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setNewUser({ ...newUser, [e.target.name]: e.target.value });

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
                        value={newUser.name}
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
                        value={newUser.username}
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
                        value={newUser.city}
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
                        value={newUser.email}
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
                    <Button className="flex-1 bg-green-700">Add</Button>
                </div>
            </form>
        </>
    );
}
