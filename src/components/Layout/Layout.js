import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header'
import Dashboard from '../../pages/Dashboard/Dashboard';
import { useSelector } from 'react-redux';
import TicToe from '../../pages/Dashboard/TicToe';
import Product from '../../pages/Product/Product';
import NotableScientist from "../../pages/NotableScientist/Home";
import CompleteGallery from '../../pages/CompleteGallery/CompleteGallery';
import TransactionList from '../../pages/Transaction/TransactionList';

function Layout() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <Sidebar className="lg:w-[30%] md:h-full" />
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="h-full overflow-y-auto w-full" style={{ backgroundImage: "url(/assets/body-bg.jpg)" }}>
          <Routes>
            {auth && (
              <>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/ticToe' element={<TicToe />} />
                <Route path='/product' element={<Product />} />
                <Route path='/notableScientist' element={<NotableScientist />} />
                <Route path='/completeGallery' element={<CompleteGallery />} />
                <Route path='/transactionlist' element={<TransactionList />} />
              </>
            )}
          </Routes>
        </div>
        <div className="bg-white py-3 border-t mt-10">
          <h3 className=" text-sm ml-3 text-[#676a6c]"> <strong>Center Panel</strong> | Powered By Center Panel | Copyright © 2014-2024</h3>
        </div>
      </div>
    </div>
  );
}

export default Layout;
