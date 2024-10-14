import React from "react";

export default function SkyButton(props) {

  let { closeButton, title } = props;

  return (
    <>
      <div className="flex items-center justify-between p-6 py-2 bg-dark-blue">
        <p className="text-[16px] lg:px-0 px-12 font-medium text-white uppercase">{title}</p>
        <div className="rounded-full cursor-pointer modal-close ">
          <svg onClick={() => closeButton()} className="fill-current font-medium text-white hover:text-white/100" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
            </path>
          </svg>
        </div>
      </div>
    </>
  );
}
