import React from "react";

export default function SkyButton(props) {

  let { onSubmit, title } = props;

  return (
    <button className="bg-dark-blue w-20 h-8 px-2 py-1 text-sm rounded text-white focus:outline-none" type="button" onClick={onSubmit} >
      {title}</button>
  );
}
