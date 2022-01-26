import { PlusCircleIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { showModal } from 'store/actions/modalActions';
import AddUser from './AddUser';
import { IconButton } from './Button';

export default function UsersHeading() {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between">
            <h1 className="font-semibold text-neutral-800 text-lg">
                User list
            </h1>
            <div>
                <IconButton
                    onClick={() => dispatch(showModal(<AddUser />))}
                    className="bg-white"
                >
                    <PlusCircleIcon className="h-6 w-6 text-neutral-800" />
                </IconButton>
            </div>
        </div>
    );
}
