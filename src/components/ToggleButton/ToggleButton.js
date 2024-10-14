import React, { useState } from 'react';

const ToggleButton = (props) => {

    const { isChecked, handleChange, name } = props;

    return (
        <>
            <div className={`flex items-center justify-center w-20 h-full rounded-full px-1 ${isChecked ? 'bg-green-500' : 'bg-red-500'}`}>
                <label htmlFor={name} className="flex items-center cursor-pointer relative">
                    <input
                        type="checkbox"
                        id={name}
                        className="sr-only"
                        onChange={handleChange}
                        checked={isChecked}
                    />
                    <div className={`block relative w-[84px] h-[20px] text-center rounded-full before:absolute before:bg-white before:w-[20px] before:h-[20px] before:text-center before:rounded-full before:transition-all before:duration-500 ${isChecked ? 'before:left-14' : 'before:left-2 peer-checked:before:left-0 peer-checked:before:bg-white'}`}></div>
                    <span id="name" className={`absolute transform text-white text-sm transition-all duration-500 ${isChecked ? 'ml-3' : 'ml-12'}`}>
                        {isChecked ? 'On' : 'Off'}
                    </span>
                </label>
            </div>
        </>
    );
};

export default ToggleButton;