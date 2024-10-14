import React from "react";

export default function PageTitle(props) {

  let { title } = props;

  return (
    <div className='w-full bg-white p-4 border-b border-gray-200'>
      <h2 className='text-3xl text-gray-400 font-noraml'>{title}</h2>
    </div>
  );
}
