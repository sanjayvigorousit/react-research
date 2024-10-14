import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    let auth = useSelector((state) => state.auth.user);
    let loading = useSelector((state) => state.auth.loading);

    useEffect(() => {
        if (auth) {
            navigate('/app/dashboard');
        }
    }, [])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginDetails = {
                "username": user.username.toUpperCase(),
                "password": user.password,
                // host: window.location.host,
                // isClient: false
            }
            dispatch(loginUser(loginDetails));
        } catch (error) {
            console.error("Error:", error);
            setError("An error occurred during the login. Please try again later.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-3 lg:px-5 py-5 bg-[#264653] min-w-screen">
            <div className="w-full overflow-hidden bg-white rounded shadow-xl" style={{ maxWidth: '650px' }}>
                <div className="w-full md:flex">
                    <div className="w-full bg-[#2a9d8f] md:w-[40%] p-3 lg:p-4 space-y-2 lg:space-y-4">
                        <div className="lg:space-y-2">
                            <h2 className="font-semibold lg:font-normal lg:text-[28px] text-white">Sign In</h2>
                            <p className="font-semibold lg:font-normal text-sm text-white pr-2">By Signing Up, you can avail full features of our services.</p>
                        </div>
                        <div className="w-full">
                            <span className="text-white font-bold text-3xl">React Example Panel</span>
                        </div>
                    </div>
                    <div className="w-full md:w-[60%] flex flex-col justify-center items-center">
                        <form onSubmit={handleOnSubmit} className="space-y-5 w-full p-4">
                            <div className="w-full">
                                <input className={`w-full p-2 border-gray-200 border outline-none`} placeholder="User ID"
                                    type="username" name="username" id="username"
                                    value={user.email}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="w-full">
                                <input className={`w-full p-2 border-gray-200 border outline-none`} placeholder="Password" type="password" name="password" id="password"
                                    value={user.password}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="w-full">
                                <button className="rounded-none cursor-pointer btn btn-type" type="submit">{loading ? "Loading..." : "Sign In"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Login;
