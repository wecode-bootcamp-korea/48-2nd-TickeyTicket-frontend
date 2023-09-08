import React from 'react';

const MainBanner = () => {
  return (
    <div className="bannerImage shrink-0 relative h-full w-full rounded-2xl shadow-xl cursor-pointer bg-cover bg-[url('./assets/images/party.jpeg')]">
      <div className="textContainer absolute bottom-0 text-white font-bold pb-20 pl-12 pr-12 items-end">
        <div className="bannerMemt mb-2">이번주부터 시작해보기</div>
        <div className="bannerTitle text-4xl font-extrabold">곧 시작하는</div>
        <div className="bannerTitle text-4xl font-extrabold">임박 모임 →</div>
      </div>
    </div>
  );
};
export default MainBanner;
