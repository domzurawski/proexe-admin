import React from 'react';
import { IModalAction, ModalActionTypes } from 'types';

export const showModal = (
    component: React.ReactChild | null
): IModalAction => ({
    type: ModalActionTypes.SHOW_MODAL,
    payload: {
        isOpen: true,
        component,
    },
});

export const hideModal = (): IModalAction => ({
    type: ModalActionTypes.SHOW_MODAL,
    payload: {
        isOpen: false,
        component: null,
    },
});
