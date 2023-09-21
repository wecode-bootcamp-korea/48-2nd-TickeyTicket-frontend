import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaAngleRight } from 'react-icons/fa';
import MainBanner from '../components/Main/MainBanner';
import Categories from '../components/Categories/Categories';
import EventCard from '../components/Categories/EventCard';
import BenefitCard from '../components/Categories/BenefitCard';
import ButtonMap from '../components/Map/ButtonMap';
import { getLocationAndFetchData } from '../utils/getLocationAndFetchData';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [myLocation, setMyLocation] = useState({
    lat: null,
    lng: null,
    errMsg: null,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://10.58.52.77:3000/main?lat=${myLocation.lat}&lng=${myLocation.lng}`,
      );
      setMainData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };
  console.log(mainData);

  useEffect(() => {
    getLocationAndFetchData(setMyLocation);
  }, []);

  useEffect(() => {
    if (!myLocation.lat) return;

    fetchData();
  }, [myLocation.lat, myLocation.lng]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!mainData.length > 0) return null;

  // genreId를 기준으로 데이터를 묶어주는 작업
  const genreArrays = [];
  for (let index = 0; index < 9; index++) {
    const genreData = mainData.filter(item => item.genreId === index + 1);
    genreArrays.push(genreData);
  }

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
            <div className="cardTitle text-2xl font-bold">주목할 만한 공연</div>
          </div>
          <div className="cardContainer w-full h-80 overflow-hidden">
            <div className="cardSlideBox">
              <EventCard />
            </div>
          </div>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Categories data={genreArrays[0]} genreId="뮤지컬" />
            <Categories data={genreArrays[1]} genreId="연극" />

            <div className="event w-full mb-14 border-y-2 pt-24 pb-24">
              <div className="eventContainer flex">
                <div className="eventLeft w-2/5 pt-5 flex-col text-center ">
                  <div className="eventLeftTitle text-4xl leading-normal mb-12">
                    <b>Tickey Ticket</b>
                    을 이용하면
                    <br />
                    이런 혜택이 따라 와요!
                  </div>
                  <button className="eventBtn w-4/5 p-3 bg-brand w-90 rounded-full">
                    <div
                      className="eventBtnText flex justify-center text-2xl font-bold text-white"
                      onClick={() => navigate('/login')}
                    >
                      지금 참여하기
                      <FaAngleRight className="w-8 h-8" />
                    </div>
                  </button>
                </div>
                <BenefitCard />
              </div>
            </div>
            <Categories data={genreArrays[2]} genreId="클래식" />
            <Categories data={genreArrays[3]} genreId="무용" />
            <Categories data={genreArrays[4]} genreId="전시" />
            <Categories data={genreArrays[5]} genreId="행사" />
            <Categories data={genreArrays[6]} genreId="음악" />
            <Categories data={genreArrays[7]} genreId="코미디" />
            <Categories data={genreArrays[8]} genreId="버스킹" />
          </>
        )}
      </div>
      <ButtonMap />
    </div>
  );
};
export default Main;
