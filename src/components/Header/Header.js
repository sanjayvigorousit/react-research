import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import { MdMenu } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userModal, setUserModal] = useState(false)
    const [changePasswordModal, setChangePasswordModal] = useState(false)
    let { setOpen } = props;
    const modalRef = useRef(null);

    const user = useSelector((state) => state.auth.user.data);

    console.log("useruseruseruseruser", user);

    // const openSide = () => {
    //     setSide(true);
    // }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setUserModal(false)
        }
    };

    const userLogout = () => {
        dispatch(logoutUser());
        // navigate("/login")
    };

    const handleUserModal = () => {
        setUserModal(!userModal)
    }

    const handleChangePasswordModal = () => {
        setChangePasswordModal(changePasswordModal);
    }

    return (
        <>
            <div className='sticky top-0 z-20 flex justify-between items-center gap-4 px-2 shadow-md h-[60px] lg:h-20 headerTop'>
                <div className="lg:hidden flex items-center space-x-2 w-full">
                    <MdMenu className="text-white h-6 w-6" />
                    <span className="text-white font-bold text-xl">Center Panel</span>
                </div>
                <div className="relative w-full">
                    <div onClick={handleUserModal}
                        className="flex justify-end w-full py-2 text-base lg:text-lg font-medium text-white cursor-pointer whitespace-nowrap">
                        {user?.username}
                        <MdKeyboardArrowDown
                            className="w-5 h-5 text-violet-200 hover:text-violet-100"
                        />
                    </div>
                    {userModal ?
                        <div ref={modalRef} className="absolute right-0 origin-top-right bg-white divide-y divide-gray-100 shadow-lg w-44 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <button onClick={handleChangePasswordModal} className="flex w-full items-center font-semibold lg:font-normal px-2 py-2 text-sm text-[#545454] focus:outline-none">
                                Change Password
                            </button>
                            <button onClick={userLogout} className="flex w-full items-center font-semibold lg:font-normal px-2 py-2 text-sm text-[#545454] focus:outline-none">
                                Logout
                            </button>
                        </div> : null}
                </div>
            </div>
        </>
    )
}

export default Header