import React from "react";

export default function CustomSelect(props) {

  let { title, inputChange, fieldData, type, optionData } = props;

  return (
    <>
      <select className="w-full p-1.5 text-left bg-white text-black border-[1px] border-gray-300 font-normal text-[13px] focus:outline-none capitalize" id={title} name={title} value={fieldData ? fieldData : ""} onChange={inputChange} >
        <option selected>{type}</option>
        {optionData && optionData.length > 0 ?
          optionData.map((element, index) => (
            <option value={element && element.id ? element.id : "NA"}>{element && element.name ? element.name : "NA"}</option>
          )) : null
        }
      </select>
    </>

  );
}
