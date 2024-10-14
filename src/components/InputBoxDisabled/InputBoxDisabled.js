import React from "react";

export default function InputBox(props) {

  let { title, fieldData } = props;

  return (
    <div className="w-full">
      <input type="text" name={title} className={`w-full p-2 mt-1 text-sm rounded-md focus:outline-none focus:ring-2 ring-gray-500 bg-[#E8F0FE]`}
        value={fieldData ? fieldData : ""} disabled
      />
    </div>
  );
}
