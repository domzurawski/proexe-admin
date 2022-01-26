import { useDispatch } from 'react-redux';
import { hideModal } from 'store/actions/modalActions';
import { IUser } from 'types';
import { deleteUser } from 'utils/rest';
import { Button } from './Button';

type Props = {
    user: IUser;
};

export default function DeleteUser({ user }: Props) {
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="text-xl">Are you sure?</h2>
            <p className="py-4">
                You won't be able to retrieve {user.name} in the future.
            </p>
            <div className="flex">
                <Button
                    onClick={() => dispatch(hideModal())}
                    className="flex-1 bg-white border hover:bg-neutral-100 border-neutral-500 text-neutral-900 mr-2"
                >
                    Cancel
                </Button>
                <Button
                    className="flex-1 bg-red-700"
                    onClick={() => deleteUser(user.id)}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}
