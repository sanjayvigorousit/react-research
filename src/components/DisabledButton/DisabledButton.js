import React from "react";

export default function DisabledButton(props) {

  let { title } = props;

  return (
    <button className="bg-[#2A3258] w-24 h-10 px-3 py-2 text-base font-semibold rounded text-white focus:outline-none" type="button" disabled>
      {title}
    </button>
  );
}
