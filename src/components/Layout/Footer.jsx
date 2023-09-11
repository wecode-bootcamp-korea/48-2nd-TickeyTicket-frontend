import React from 'react';

export default function Footer() {
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;

  return (
    <footer className="py-10 bg-gray-100 flex-[0_0_auto] box-border relative block ">
      <div className=" px-[60px] box-border text-xs grid grid-cols-3 gap-x-8">
        <div>
          <div className="flex items-center gap-[2px]">
            <p>고객센터</p>
          </div>
          <div className="flex items-center mt-5 mb-2">
            <p>전화번호</p>
          </div>
          <p>
            평일: 전체 문의 상담 가능 주말, 공휴일: 오늘의집 직접배송,
            이사/시공/제품설치 문의 상담 가능
          </p>
          <p>
            평일: 전체 문의 상담 가능 주말, 공휴일: 오늘의집 직접배송,
            이사/시공/제품설치 문의 상담 가능
          </p>
          <p>
            평일: 전체 문의 상담 가능 주말, 공휴일: 오늘의집 직접배송,
            이사/시공/제품설치 문의 상담 가능
          </p>
          <p>
            평일: 전체 문의 상담 가능 주말, 공휴일: 오늘의집 직접배송,
            이사/시공/제품설치 문의 상담 가능
          </p>
        </div>
        <div>푸터 내용~</div>
        <div>푸터 내용~</div>
      </div>
    </footer>
  );
}
