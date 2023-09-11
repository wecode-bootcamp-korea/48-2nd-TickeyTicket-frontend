import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';
import Avatar from '../UI/Avatar';

export default function Header() {
  const searchInputRef = useRef(null);

  const Token = localStorage.getItem('token');
  const navigate = useNavigate();

  const goToPosting = () => {
    if (!Token) {
      navigate('/login');
    } else if (Token) {
      navigate('/posting');
    }
  };

  const goToLogout = () => {
    alert('로그아웃하시겠습니까?');
    localStorage.removeItem('token');
  };

  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;

  return (
    <div className="relative z-30 border-b">
      <div className="max-w-[1256px] h-20 py-2.5 mx-auto relative flex items-center content-between">
        <div className="mr-9 static flex-[0.7_0_auto]">
          <a
            href="/"
            className="h-[30px] items-center m-[-4px] p-1 cursor-pointer"
          >
            <div className="bg-logo h-[80px] w-[74px] bg-cover" />
          </a>
        </div>
        <div className="block flex-[1_1_0]">
          <SearchInput inputRef={searchInputRef} />
        </div>
        <div className="block flex-[0_1_auto]">
          <div className="flex items-center">
            <div className="flex mr-2.5 ml-2 items-center">
              {Token ? (
                <>
                  <div className="mx-2.5 cursor-pointer" onClick={goToLogout}>
                    로그아웃
                  </div>
                  <div className="mr-5 ml-3.5">
                    <a className="mr-5 ml-3.5" href="mypage">
                      <Avatar size="medium" image="유저 이미지 주소" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <a className="mx-2.5" href="/login">
                    로그인
                  </a>
                  <a className="mx-2.5" href="/signup">
                    회원가입
                  </a>
                </>
              )}
            </div>
            <span>
              <button className="text-sm inline-flex content-center items-center w-auto h-10 rounded px-4 box-border text-center text-white bg-neutral-900 outline-none overflow-hidden ">
                <span className="mr-1.5">당신의 공연을 티켓해보세요 🎟️</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
