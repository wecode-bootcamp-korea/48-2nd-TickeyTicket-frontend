import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sub from './pages/Sub';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Main from './pages/Main';
import MapPage from './pages/MapPage';
import MyPage from './pages/MyPage';
import Payment from './pages/Payment';
import SignUp from './pages/SignUp';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Nav from './components/Layout/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
