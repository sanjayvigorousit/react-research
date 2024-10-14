import React from "react";

export default function Searchbox(props) {

  let { handleSearch } = props;

  return (
    <div className="lg:space-y-0 space-y-1  ">
      <label className="mt-1 text-sm text-gray-500 lg:mx-2">Search:</label>
      <input className=" px-2 py-1 placeholder-gray-600 transition duration-150 ease-in-out bg-white border border-gray-300 appearance-none md:w-52 text-gray-700 focus:outline-none focus:border-2 focus:border-green-400 focus:bg-gray-50 focus:text-gray-600 text-sm sm:leading-5" id="exampleSearch2" type="amount" required onChange={handleSearch} />
    </div>
  );
}
