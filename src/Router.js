import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Sub from './pages/Sub';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Main from './pages/Main';
import Map from './pages/Map';
import MyPage from './pages/MyPage';
import Payment from './pages/Payment';
import SignUp from './pages/SignUp';

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
        <Route path="/map" element={<Map />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
