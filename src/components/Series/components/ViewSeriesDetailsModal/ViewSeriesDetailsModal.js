import React from "react";
import Modal from 'react-modal';
import ModalTitleTab from "../../../../components/ModalTitleTab";
import Label from "../../../../components/Label/Label";
import InputBoxDisabled from "../../../../components/InputBoxDisabled/InputBoxDisabled";

export default function ViewSeriesDetailsModal(props) {

  let { viewSeriesModal, handleViewSeriesModal, viewData } = props;

  return (
    <div className={viewSeriesModal ? "fixed w-full lg:left-24 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb] md:w-[38rem] w-full mx-auto rounded shadow-lg overflow-y-auto mt-2">

        <ModalTitleTab closeButton={handleViewSeriesModal} title={"View Series Details"} />

        <div className="p-4">
          <form autoComplete="off" className="p-4 space-y-4 border border-gray-300">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <div className="w-full">
                <Label title={"Name"} />
                <InputBoxDisabled fieldData={viewData && viewData["name"] ? viewData["name"] : ""} title={"name"} />
              </div>
              <div className="w-full">
                <Label title={"Sport Id"} />
                <InputBoxDisabled fieldData={viewData && viewData["sportId"] ? viewData["sportId"] : ""} title={"sportId"} />
              </div>
              <div className="w-full">
                <Label title={"Series Id"} />
                <InputBoxDisabled fieldData={viewData && viewData["seriesId"] ? viewData["seriesId"] : ""} title={"seriesId"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
