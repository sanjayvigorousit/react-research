import React from "react";
import SkyButton from "../../../../components/SkyButton/SkyButton";
import ModalTitleTab from "../../../../components/ModalTitleTab";
import Label from "../../../../components/Label/Label";
import InputBox from "../../../../components/InputBox/InputBox";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";
import DisabledButton from "../../../../components/DisabledButton/DisabledButton";

export default function AddCustomSeriesModal(props) {

  let { addCustomSeriesModal, handleAddCustomSeriesModal, fieldsSeriesAdd, inputChangeSeriesAdd, customSeriesAddSubmit, sportData, loading } = props;

  return (
    <div className={addCustomSeriesModal ? "fixed w-full lg:left-24 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb] md:w-[38rem] w-full mx-auto rounded shadow-lg overflow-y-auto mt-2">
        <ModalTitleTab closeButton={handleAddCustomSeriesModal} title={"Add Custom Series"} />

        <div className="p-4">
          <form autoComplete="off" className="p-4 space-y-4 capitalize border border-gray-300 ">
            <div className="grid grid-cols-1 gap-3">
              <div className=" w-full">
                <Label title={"Sport Id"} />
                <CustomSelect inputChange={inputChangeSeriesAdd} fieldData={fieldsSeriesAdd && fieldsSeriesAdd["sportId"] ? fieldsSeriesAdd["sportId"] : ""} type={"Plz Select Sport Id"} optionData={sportData} title={"sportId"} />
              </div>
              <div className=" w-full">
                <Label title={"Name"} />
                <InputBox inputChange={inputChangeSeriesAdd} fieldData={fieldsSeriesAdd && fieldsSeriesAdd["name"] ? fieldsSeriesAdd["name"] : ""} type={"text"} title={"name"} />
              </div>
              <div className=" w-full">
                <Label title={"Series Id"} />
                <InputBox inputChange={inputChangeSeriesAdd} fieldData={fieldsSeriesAdd && fieldsSeriesAdd["seriesId"] ? fieldsSeriesAdd["seriesId"] : ""} type={"text"} title={"seriesId"} />
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              {/* {loading == false ? */}
              <SkyButton onSubmit={customSeriesAddSubmit} title={"Submit"} />
              {/* : <DisabledButton title={"Submit"} />} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
