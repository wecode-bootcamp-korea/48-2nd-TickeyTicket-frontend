import React from 'react';

export default function Footer() {
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;

  return (
    <footer className="py-10 bg-gray-100 flex-[0_0_auto] box-border relative block ">
      <div className=" px-[60px] box-border text-xs grid grid-cols-3 gap-x-8">
        <div>
          <div className="flex items-center gap-[2px]">
            <b>(주)인터파크트리플</b>
            <p>
              주소 서울시 강남구 삼성로 512 삼성동빌딩 10층 사업자등록번호
              824-81-02515 사업자정보확인 통신판매업신고 2022-서울강남-02179
              관광사업증 등록번호 : 제2014-42호 호스팅서비스제공자
              (주)인터파크트리플｜대표이사 최휘영
            </p>
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
