import React, { useState } from 'react';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';

const MainCard = () => {
  const [heart, setHeart] = useState(false);

  const isToggled = () => {
    setHeart(!heart);
  };

  return (
    <div className="maincard relative shrink-0 w-24.3% rounded-xl shadow-md cursor-pointer">
      <div className="showImg w-full h-52 bg-cover bg-[url('./assets/images/party2.jpeg')] rounded-t-xl" />
      <div className="cardTop absolute top-0 p-2 flex justify-between w-full">
        <div className="tag bg-brand">마감 임박</div>
        <div onClick={isToggled}>
          {heart ? (
            <VscHeartFilled className="w-6 h-6 text-brand cursor-pointer" />
          ) : (
            <VscHeart className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>
      <div className="showReport p-2 pl-3">
        <div>뮤지컬 맘마미아</div>
        <div>충무아트센터 대극장</div>
        <div>2023.7.20 ~ 10.02 </div>
      </div>
    </div>
  );
};
export default MainCard;
