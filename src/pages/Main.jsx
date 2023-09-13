import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import MainBanner from '../components/Main/MainBanner';
import Categories from '../components/Categories/Categories';
import EventCard from '../components/Categories/EventCard';
import BenefitCard from '../components/Categories/BenefitCard';
import ButtonMap from '../components/Buttons/ButtonMap';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="banner relative mt-6">
          <div className="bannerSlideBox flex w-7xl h-22.5 //overflow-hidden">
            <div className="w-full h-full">
              <MainBanner />
            </div>
          </div>
        </div>

        <div className="categories relative mt-24 ">
          <div className="categoryHeader flex justify-between mb-6">
            <div className="cardTitle text-2xl font-bold">
              주목할 만한 이벤트
            </div>
          </div>
          <div className="cardContainer w-full h-80 overflow-hidden">
            <div className="cardSlideBox">
              <EventCard />
            </div>
          </div>
        </div>
        <Categories />
        <Categories />

        <div className="event w-full mt-14 mb-14 border-y-2 pt-24 pb-24">
          <div className="eventContainer flex">
            <div className="eventLeft w-2/5 pt-5 flex-col text-center ">
              <div className="eventLeftTitle text-4xl leading-normal mb-12">
                <b>Tickey Ticket</b>
                을 이용하면
                <br />
                이런 혜택이 따라 와요!
              </div>
              <button className="eventBtn w-4/5 p-3 bg-brand w-90 rounded-full">
                <div className="eventBtnText flex justify-center text-2xl font-bold text-white">
                  지금 참여하기
                  <FaAngleRight className="w-8 h-8" />
                </div>
              </button>
            </div>
            <BenefitCard />
          </div>
        </div>
        <Categories />
        <Categories />
      </div>
      <ButtonMap />
    </div>
  );
};

export default Main;
