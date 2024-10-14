import React from "react";


export default function ShowOption(props) {

  let { inputChange, size, optionData } = props;

  return (
    <>
      <div className="">
        <label className='text-sm text-gray-500 mr-2'>Show:</label>
        <div className="dropdown inline-block relative">
          <div className="border border-gray-200 w-full py-1.5 inline-flex items-center">
             <select onChange={inputChange} className="text-sm bg-white focus:outline-none w-full" value={size}>
              {optionData && optionData.length > 0 ?
                optionData.map((element, index) => (
                  <option value={element && element.id ? element.id : "NA"}>{element && element.name ? element.name : "NA"}</option>
                )) : null
              }
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
