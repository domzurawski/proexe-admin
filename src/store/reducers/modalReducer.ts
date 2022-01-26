import { IModalAction, IModalState, ModalActionTypes } from 'types';

const initialState: IModalState = {
    isOpen: false,
    component: null,
};

export const modalReducer = (state = initialState, action: IModalAction) => {
    switch (action.type) {
        case ModalActionTypes.SHOW_MODAL || ModalActionTypes.HIDE_MODAL:
            return {
                isOpen: action.payload.isOpen,
                component: action.payload.component,
            };
        default:
            return state;
    }
};
