import React from 'react';

interface ActionButtonProps {
    text: string;
    selected: boolean;
}

export const ActionButton3 = ({ text, selected }: ActionButtonProps) => {
    return (
        <button className={`flex items-center justify-center h-6 py-1 px-3 rounded-full ${selected ? 'bg-[#146EB4] text-white ' : 'bg-[#E6E6E6] text-[#808080]'}`}>
            <span className="flex items-center justify-center  text-sm">
                {text}
            </span>
        </button>
    );
}