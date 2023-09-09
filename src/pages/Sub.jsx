import React from 'react';
import { LuSlidersHorizontal } from 'react-icons/lu';
import SubCard from '../components/Categories/SubCard';

const Sub = () => {
  return (
    <div className="sub">
      <div className="container">
        <div className="subCategories">
          <div className="categories relative mt-24 mb-48">
            <div className="categoryHeader flex justify-between mb-6">
              <div className="cardTitle text-3xl font-bold">뮤지컬</div>
              <button className="more cursor-pointer flex items-center mt-10 gap-2 p-1 pl-5 pr-5 border border-gray-700 rounded-3xl text-gray-700">
                <LuSlidersHorizontal />
                필터
              </button>
            </div>
            <div className="cardContainer w-full">
              <div className="cardSlideBox">
                <div className="cards flex flex-wrap gap-10">
                  <SubCard />
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
