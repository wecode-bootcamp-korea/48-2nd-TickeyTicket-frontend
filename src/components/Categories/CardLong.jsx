import React from 'react';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';

const CardLong = () => {
  return (
    <div className="card flex relative shrink-0 w-32.5% h-60 rounded-3xl shadow-md showImg cursor-pointer bg-cover bg-[url('./assets/images/party2.jpeg')]">
      <div className="showReport flex-col justify-center pt-16 w-full h-full bg-white bg-opacity-30 text-center m-auto">
        <div className="text-3xl">뮤지컬 맘마미아</div>
        <div>충무아트센터 대극장</div>
        <div>2023.7.20 ~ 10.02 </div>
        <div className="CardNumber absolute bottom-2 right-5">1/5</div>
      </div>
    </div>
  );
};
export default CardLong;
