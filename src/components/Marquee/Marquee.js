import React from "react";


export default function Marquee(props) {

  let { marqueData } = props;

  return (
    <div className='py-2'>
      <marquee className="text-white text-sm py-2 bgheader">!! {marqueData} !!</marquee>
    </div>
  );
}