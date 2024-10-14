import React from "react";
import SkyButton from "../../../../components/SkyButton/SkyButton";
import InputBox from "../../../../components/InputBox/InputBox";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";
import Label from "../../../../components/Label/Label";
import ModalTitleTab from "../../../../components/ModalTitleTab";
import DisabledButton from "../../../../components/DisabledButton/DisabledButton";


export default function UpdateCustomSeriesModal(props) {

  let { updateSeriesModal, handleUpdateSeriesModalHide, fieldSeriesUpdate, inputChangeSeriesUpdate, seriesUpdateSubmit, manageSeriesStatus, sportData, loading } = props;

  return (
    <div className={updateSeriesModal ? "fixed w-full lg:left-24 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb] md:w-[38rem] w-full mx-auto rounded shadow-lg overflow-y-auto mt-2">

        <ModalTitleTab closeButton={handleUpdateSeriesModalHide} title={"Update Custom Series"} />

        <div className="p-4">
          <form autoComplete="off" className="p-4 space-y-4 capitalize border border-gray-300 ">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              <div className=" w-full">
                <Label title={"Sport Id"} />
                <CustomSelect inputChange={inputChangeSeriesUpdate} fieldData={fieldSeriesUpdate && fieldSeriesUpdate["sportId"] ? fieldSeriesUpdate["sportId"] : ""} type={"Plz Select Sport Id"} optionData={sportData} title={"sportId"} />
              </div>
              <div className=" w-full">
                <Label title={"Series Id"} />
                <InputBox inputChange={inputChangeSeriesUpdate} fieldData={fieldSeriesUpdate && fieldSeriesUpdate["seriesId"] ? fieldSeriesUpdate["seriesId"] : ""} title={"seriesId"} />
              </div>
              <div className=" w-full">
                <Label title={"Name"} />
                <InputBox inputChange={inputChangeSeriesUpdate} fieldData={fieldSeriesUpdate && fieldSeriesUpdate["name"] ? fieldSeriesUpdate["name"] : ""} title={"name"} />
              </div>
              {/* <div className=" w-full">
                <Label title={"Series Status"} />
                <label className="toggle-switch w-28">
                  <input type="checkbox" checked={fieldSeriesUpdate && fieldSeriesUpdate["isActive"] ? fieldSeriesUpdate["isActive"] : ""} onChange={manageSeriesStatus} />
                  <span className="switch" />
                </label>
              </div> */}

              <div className=" w-full">
                <Label title={"Match Status"} />
                <label className="switch">
                  <input type="checkbox" id="isActive" checked={fieldSeriesUpdate && fieldSeriesUpdate["isActive"] ? fieldSeriesUpdate["isActive"] : ""} onChange={() => manageSeriesStatus()} />
                  <div className="slider rounded-full">
                    <span className="on">ON</span>
                    <span className="off">OFF</span>
                  </div>
                </label>

              </div>


            </div>
            <div className="flex justify-center items-center w-full">
              {/* {loading == false ? */}
              <SkyButton onSubmit={seriesUpdateSubmit} title={"Submit"} />
              {/* : <DisabledButton title={"Submit"} />} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
