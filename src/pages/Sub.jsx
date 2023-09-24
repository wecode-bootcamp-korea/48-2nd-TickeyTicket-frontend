import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { LuSlidersHorizontal } from 'react-icons/lu';
import SubCard from '../components/Categories/SubCard';
import { getLocationAndFetchData } from '../utils/getLocationAndFetchData';
import { NAV_BAR } from '../utils/constants';

const Sub = () => {
  const [subData, setSubData] = useState([]);
  const [searchParams] = useSearchParams();

  const { pathname, search } = useLocation();

  const currentPath = pathname + search;

  const subTitle = NAV_BAR.find(el => el.url === currentPath).tabName;
  // 1. NAV_BAR 배열에서, 현재 경로와 매칭되는 url을 가지고 있는 요소(객체)를 찾아야 함
  // 2. 그 객체의 tabName이 곧 subData로 하드코딩 되어 있는 타이틀!

  const [clicked, setClicked] = useState('인기순');
  const [myLocation, setMyLocation] = useState({
    lat: null,
    lng: null,
    errMsg: null,
  });

  const genreId = searchParams.get('genreId');

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://10.58.52.58:3000/main?lat=${myLocation.lat}&lng=${myLocation.lng}&genreId=${genreId}`,
      );
      setSubData(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = sortName => {
    setClicked(sortName);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://10.58.52.58:3000/main?lat=${myLocation.lat}&lng=${myLocation.lng}&genreId=${genreId}`,
      );
      setSubData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getLocationAndFetchData(setMyLocation);
  }, []);

  useEffect(() => {
    if (!myLocation.lat) return;

    fetchData();
  }, [myLocation.lat, myLocation.lng, genreId]);

  return (
    <div className="sub">
      <div className="container">
        <div className="subCategories">
          <div className="categories relative mt-20 mb-48">
            <div className="categoryHeader flex justify-between mb-10">
              <div className="cardTitle text-3xl font-bold">{subTitle}</div>
              <div className="filter flex gap-2 mr-3">
                <button
                  className={`more cursor-pointer flex items-center gap-2 p-1 pl-5 pr-5 border border-gray-700 rounded-3xl text-gray-700 ${
                    clicked === '인기순' ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => handleClick('인기순')}
                >
                  {/* <LuSlidersHorizontal /> */}
                  인기순
                </button>
                <button
                  className={`more cursor-pointer flex items-center gap-2 p-1 pl-5 pr-5 border border-gray-700 rounded-3xl text-gray-700 ${
                    clicked === '날짜빠른순' ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => handleClick('날짜빠른순')}
                >
                  {/* <LuSlidersHorizontal /> */}
                  날짜빠른순
                </button>
              </div>
            </div>
            <div className="cardContainer w-full">
              <div className="cardSlideBox">
                <div className="cards flex flex-wrap gap-5">
                  <SubCard subData={subData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub;
