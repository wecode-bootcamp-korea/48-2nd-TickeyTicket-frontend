import React, { useState } from 'react';
import Calendar from './Calendar';

const ProductSide = () => {
  return (
    <div className="productSide container fixed top-20 m-auto w-full">
      <div className="side absolute top-20 left-[1000px] bg-white rounded-lg z-10">
        <div>
          <div className="sideMain flex-col border-mediumgray border-[1px] rounded-lg">
            <div className="sideContainer border-mediumgray border-b-[1px] p-3">
              <div className="sideHeader">관람일</div>
              <div className="sideContent p-3 pb-0">
                <Calendar />
              </div>
            </div>
            <div className="sideContainer p-3">
              <div className="sideHeader">공연시간</div>
              <div className="sideContent p-3">
                <div className="sideTimeTable bg-babypink p-3 pl-5 h-12 rounded-xl text-brand font-bold">
                  19:00
                </div>
                <div className="sideRemainTable mt-4 flex gap-2 pl-2 text-sm">
                  잔여석
                  <div className="remainNumber">24</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sideBtnWrap flex flex-col gap-2 mt-4">
            <button className="sideBookingBtn bg-brand text-white text-xl font-bold p-4 rounded-xl">
              예매하기
            </button>
            <button className="sideLikeBtn bg-white border-brand border-2 text-brand text-xl font-bold p-4 rounded-xl">
              관심함에 담기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSide;
