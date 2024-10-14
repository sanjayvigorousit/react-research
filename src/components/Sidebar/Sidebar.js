import React, { useEffect } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { MdOutlineLibraryBooks, MdOutlineDashboard, MdLibraryBooks, MdOutlineSportsCricket } from "react-icons/md";
import { logoutUser } from '../../redux/actions/authActions';
import { FaCircleNotch, FaRegUserCircle, FaThLarge } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { useSelector } from 'react-redux';

function Sidebar({ location }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navWidth, setNavWidth] = React.useState(true);
  const [showSection, setShowSection] = React.useState("");

  const onClickMenu = (url) => {
    navigate(url)
    setNavbarOpen(!navbarOpen)
  }

  const userLogout = () => {
    dispatch(logoutUser());
    // navigate("/login")
  };

  let users = useSelector((state) => state.auth.user.data);
  console.log("usersusersusersusers", users);


  return (

    <>

      <button className={` ${navbarOpen === true ? 'hidden' : 'flex'} absolute top-0 left-0 px-5 items-center justify-center text-black z-50 h-16 lg:hidden `} onClick={() => setNavbarOpen(!navbarOpen)}>
      </button>

      {navbarOpen ?
        <div className={` ${navbarOpen === false ? 'hidden' : ''} lg:hidden lg:flex-shrink-0 lg:static inset-0 z-50 fixed bg-opacity-40`} onClick={() => setNavbarOpen(!navbarOpen)}>
          <div className="absolute top-0 z-40 flex items-center rounded-full justify-ce focus:outline-none focus:bg-gray-600 left-64 lg:left-72 " aria-label="Close sidebar">
          </div>
        </div>
        : null}

      <div className={` ${navbarOpen === false ? 'hidden' : 'flex'} fixed left-0 inset-y-0 lg:static lg:left-auto lg:inset-auto lg:flex ${navWidth ? "w-[260px] lg:w-[280px]" : "w-20"} z-50 transition-all duration-300`}>
        <div className={`flex flex-col transition-all duration-300 ${navWidth ? "w-[280px]" : "w-20"}`}>
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto border-r border-gray-100 border-opacity-20 ">
            <div className="lg:h-[70px] h-[53px] w-full bg-[#2f4050]">
              <div className="w-full flex items-center justify-start lg:h-[70px] h-[53px] bg-black/30 px-3">
                {navWidth ?
                  <div className="flex items-center justify-start space-x-3 lg:h-[70px] h-[53px] py-2 w-full lg:pl-4">
                    <AiOutlineMenuFold onClick={() => setNavWidth(!navWidth)} size={24} className="text-white hidden lg:block cursor-pointer transition-all duration-150" />
                    <span className="text-white font-bold text-3xl animatated-text text-nowrap ">{navWidth ? "Example Panel" : ""}</span>
                  </div>
                  : <div className="flex items-center justify-start pl-3">
                    <AiOutlineMenuFold onClick={() => setNavWidth(!navWidth)} size={24} className="text-white hidden lg:block cursor-pointer rotate-180 transition-all duration-500" />
                  </div>}
              </div>
            </div>
            {navWidth ?
              <nav className="flex-1 space-y-2 bg-[#2f4050]">
                <div className="mt-2 group hover:bg-[#293846]">
                  <span onClick={() => onClickMenu('/app/dashboard')} className={`cursor-pointer h-9 items-center flex justify-start space-x-4 px-1 py-2 text-sm transition ease-in-out duration-150 text-white`}>
                    <div className="ml-[2rem] group-hover:text-[#fa8c15]">
                      <FaThLarge size={16} />
                    </div>
                    <span className="text-[12px] group-hover:text-[#fa8c15] font-semibold lg:font-normal">Dashboard</span>
                  </span>
                </div>
                <div className="cursor-pointer group">
                  {showSection === "manageExample" ?
                    <span onClick={() => setShowSection("")} className="flex items-center px-1 py-2 space-x-4 text-[12px] text-white transition duration-150 ease-in-out cursor-pointer h-9">
                      <span className="ml-[2rem] group-hover:text-[#fa8c15]"><FaRegUserCircle size={18} /> </span>
                      <span className="text-[12px] group-hover:text-[#fa8c15] font-semibold lg:font-normal">Manage Example</span>
                      {showSection === "manageExample" ? <HiChevronUp className="group-hover:text-[#fa8c15]" /> : < HiChevronDown className="group-hover:text-[#fa8c15]" />}
                    </span> :
                    <span onClick={() => setShowSection("manageExample")} className="flex items-center px-1 py-2 space-x-4 text-[12px] text-white transition duration-150 ease-in-out cursor-pointer h-9">
                      <span className="ml-[2rem] group-hover:text-[#fa8c15]"><FaRegUserCircle size={18} /> </span>
                      <span className="text-[12px] group-hover:text-[#fa8c15] font-semibold lg:font-normal">Manage Example</span>
                      {showSection === "manageExample" ? <HiChevronUp className="group-hover:text-[#fa8c15]" /> : < HiChevronDown className="group-hover:text-[#fa8c15]" />}
                    </span>}
                  {showSection === "manageExample" ?
                    <div onClick={() => setShowSection("")}>
                      <span onClick={() => onClickMenu('/app/ticToe')} className={`cursor-pointer h-9 items-center flex space-x-4 px-1 py-2 text-[12px] transition ease-in-out duration-150 text-white`}>
                        <span className="ml-[4.8rem] text-[12px] font-semibold lg:font-normal">Tic Toe</span>
                      </span>
                      <span onClick={() => onClickMenu('/app/notableScientist')} className={`cursor-pointer h-9 items-center flex space-x-4 px-1 py-2 text-[12px] transition ease-in-out duration-150 text-white`}>
                        <span className="ml-[4.8rem] text-[12px] font-semibold lg:font-normal">Notable Scientists</span>
                      </span>
                      <span onClick={() => onClickMenu('/app/transactionlist')} className={`cursor-pointer h-9 items-center flex space-x-4 px-1 py-2 text-[12px] transition ease-in-out duration-150 text-white`}>
                        <span className="ml-[4.8rem] text-[12px] font-semibold lg:font-normal">Transaction List</span>
                      </span>
                    </div> : null}
                </div>
                <div className="mt-2 group hover:bg-[#293846]">
                  <span onClick={userLogout} className={`cursor-pointer h-9 items-center flex justify-start space-x-4 px-1 py-2 text-[12px] transition ease-in-out duration-150 text-white`}>
                    <div className="ml-[2rem] group-hover:text-[#fa8c15]">
                      <IoMdLogOut size={20} />
                    </div>
                    <span className="text-[12px] group-hover:text-[#fa8c15] font-semibold lg:font-normal">Logout</span>
                  </span>
                </div>
              </nav>
              :
              <nav className="bg-[#2f4050] h-full w-full">
                <div className="group w-full">
                  <span onClick={() => onClickMenu('/app/dashboard')} className={`cursor-pointer h-9 flex justify-center items-center  px-1 py-2 text-sm transition ease-in-out duration-150 text-white`}>
                    <div className="group-hover:text-[#fa8c15]">
                      <FaThLarge size={20} className="group-hover:text-[#fa8c15]" />
                    </div>
                  </span>
                </div>
                <div className="group w-full">
                  <div className="h-14 px-6 flex justify-center items-center w-full text-white cursor-pointer">
                    <FaRegUserCircle size={25} className="group-hover:text-[#fa8c15]" />
                  </div>
                  <div className="absolute left-20 -mt-12 hidden group-hover:block bg-dark-blue w-48">
                    <span onClick={() => onClickMenu('/app/userlist/staff')} className="cursor-pointer h-8 flex items-center px-3 py-1.5 text-sm transition ease-in-out duration-150 text-white">
                      <span className="text-sm font-semibold lg:font-normal">Tic Toe</span>
                    </span>
                  </div>
                </div>
                <div className="group w-full">
                  <span onClick={userLogout} className="cursor-pointer h-9 flex justify-center items-center  px-1 py-2 text-sm transition ease-in-out duration-150 text-white">
                    <div className="group-hover:text-[#fa8c15]">
                      <IoMdLogOut size={25} className="group-hover:text-[#fa8c15]" />
                    </div>
                  </span>
                </div>
              </nav>}
          </div>
        </div>
      </div>

    </>
  );
}
export default Sidebar;