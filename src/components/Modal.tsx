import { MouseEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'store/actions/modalActions';
import { RootState } from 'types';

export default function Modal(): ReactElement {
    const dispatch = useDispatch();
    const { isOpen, component } = useSelector(
        (state: RootState) => state.modalReducer
    );

    const stopPropagation = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    };

    return (
        <>
            {isOpen && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => dispatch(hideModal())}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div
                                className="mx-auto p-6 bg-white rounded-md h-screen w-screen sm:w-fit sm:h-fit flex flex-col justify-around"
                                onClick={stopPropagation}
                            >
                                {component}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
}
