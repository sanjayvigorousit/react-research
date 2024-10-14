import React from "react";

export default function Label(props) {

  let { title } = props;

  return (
    <label className="text-[12px] text-[#676a6c] font-[600] uppercase">{title}</label>
  );
}
