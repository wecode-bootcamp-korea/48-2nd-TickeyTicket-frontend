import React from 'react';

const ShowInfo = () => {
  return (
    <div className="showInfo flex-none pl-5 pr-7 pb-1 w-[340px] border-r border-gray">
      <p className="text-base mb-2">예약정보</p>
      <div className="boxWrap flex flex-column">
        <div className="showImage mr-6 flex-1">
          {/* <img src={data.url} alt={data.showTitle} /> */}
          <img
            className="w-[140px] h-auto"
            src="https://ticketimage.interpark.com/Play/image/large/23/23011433_p.gif"
            alt="뮤지컬 문스토리"
          />
        </div>
        <div className="showText flex flex-col flex-1 justify-between">
          {/* <div>{data.name}</div>
          <div>{data.place}</div>
          <div>{data.period}</div> */}

          <div>
            <div className="text-lg font-bold mb-3">뮤지컬 문스토리</div>
            <div className="text-sm text-darkgray leading-normal">
              위워크 선릉점 비어가든
            </div>
            <div className="mb-4 text-sm text-darkgray leading-normal">
              2023-10-21 20:00
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-between mb-1 text-base leading-normal">
              인원
              <span className="text-brand">2명</span>
            </div>
            <div className="flex flex-row justify-between text-base leading-normal">
              총액
              <span className="text-brand">10,000원</span>
              {/* <span>{totalPrice().toLocaleString()}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
