import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Footer, Header } from '../../components';
import './mainApp.scss';

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
        <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog/:id?" element={<CreateBlog />} />
          <Route path="/detail-blog/:id" element={<DetailBlog />} />
        </Routes>
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default MainApp;
