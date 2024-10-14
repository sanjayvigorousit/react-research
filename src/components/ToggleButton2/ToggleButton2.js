import React, { useState } from 'react';

const ToggleButton2 = (props) => {
    const { isChecked, handleChange } = props;

    return (
        <>
            <div className="flex justify-start items-center w-full">
                <div
                    className={`w-full h-5 flex items-center cursor-pointer border-[1px] transition-colors duration-300 relative ${isChecked ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500'
                        }`}
                    onClick={handleChange}
                >
                    <div
                        className={`w-1/2 h-5 bg-white transform duration-300 ease-in-out border-[1px] ${isChecked ? 'translate-x-8 border-green-500' : 'translate-x-0 border-red-500'
                            }`}
                    ></div>
                    <div className="absolute flex justify-between items-center text-center w-full">
                        <span
                            className={`text-[10px] pl-1 font-bold ${isChecked ? 'text-green-500' : 'text-black'
                                }`}
                        >
                            OFF
                        </span>
                        <span
                            className={`text-[10px] pr-2 font-bold ${isChecked ? 'text-black' : 'text-red-500'
                                }`}
                        >
                            ON
                        </span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ToggleButton2;
