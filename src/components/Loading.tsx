import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div className="flex flex-col h-screen w-screen">
            <ReactLoading
                className="mx-auto mt-20"
                type="spinningBubbles"
                color="black"
                height={50}
                width={50}
            />
        </div>
    );
}
