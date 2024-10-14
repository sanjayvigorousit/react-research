import React from "react";

export default function ActionButton(props) {

  let { title, onSubmit, data, apiCallNo } = props;

  return (
    <button onClick={() => onSubmit(data, apiCallNo)} className='bgheader hover:bg-[#21b9bb] px-2 py-1 rounded-sm capitalize text-[12px]' type="button">{title}</button>
  );
}
