import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

export default function TitleTab(props) {

  let { title, handleCloseModal } = props;

  return (
    <div className="flex items-center justify-between p-3 bg-dark-blue">
      <p className="text-lg font-medium text-white">{title}</p>
      <div className="rounded-full cursor-pointer modal-close" onClick={handleCloseModal}>
        <AiOutlineClose className='w-5 h-5 text-white' />
      </div>
    </div>
  );
}
