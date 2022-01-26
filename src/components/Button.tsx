import React from 'react';

type Props = {
    onClick?: (e: any) => any;
    className?: string;
    children: string | React.ReactNode;
};

export function Button({ onClick, className, children }: Props) {
    return (
        <button
            onClick={onClick}
            className={`flex justify-around items-center w-fit px-4 py-2 text-white rounded hover:bg-opacity-90 hover:border-opacity-80 transition ${className}`}
        >
            {children}
        </button>
    );
}

export function IconButton({ onClick, className, children }: Props) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center w-fit px-2 py-2 text-white rounded-full hover:bg-neutral-100 transition ${className}`}
        >
            {children}
        </button>
    );
}
