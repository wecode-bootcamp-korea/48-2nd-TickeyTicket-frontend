import React from 'react';

const ShowInfo = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div className="showInfo flex-none pl-5 pr-7 pb-1 w-[340px] border-r border-gray">
      <p className="text-base mb-2">예약정보</p>
      <div className="boxWrap flex flex-column">
        <div className="showImage mr-6 flex-1">
          <img
            className="w-[140px] h-auto"
            src={data.thumbnailImageUrl}
            alt={data.productName}
          />
        </div>
        <div className="showText flex flex-col flex-1 justify-between">
          <div>
            <div className="text-lg font-bold mb-3">{data.productName}</div>
            <div className="text-sm text-darkgray leading-normal">
              {data.performPlace}
            </div>
            <div className="mb-4 text-sm text-darkgray leading-normal">
              {data.startDate}
              {data.startTime}
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-between mb-1 text-base leading-normal">
              인원
              <span className="text-brand">1명</span>
            </div>
            <div className="flex flex-row justify-between text-base leading-normal">
              총액
              <span className="text-brand">{data.price}원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
