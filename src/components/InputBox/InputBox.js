import React from "react";

export default function InputBox(props) {

  let { title, inputChange, fieldData, type, errorData } = props;
  console.log("errorDataerrorDataerrorData", errorData);


  return (
    <>
      <div className="w-full">
        <input type={type} name={title} className="w-full p-1.5 text-[13px] text-gray-800/70 border focus:outline-none capitalize"
          value={fieldData}
          onChange={inputChange}
        />
        {errorData ?
          <div className="text-xs text-red-500 pt-[3px]">
            {errorData}
          </div> : null}
      </div>
    </>
  );
}
