import React from 'react';
import Card from './Card';

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories relative mt-24 mb-48">
        <div className="categoryHeader flex justify-between mb-6">
          <div className="cardTitle text-2xl font-bold">주목할 만한 이벤트</div>
          <button className="more p-1 pl-5 pr-5 border border-gray-500 rounded-3xl text-gray-500">
            더 보기
          </button>
        </div>
        <div className="cardContainer w-full">
          <div className="cardSlideBox">
            <div className="cards flex gap-3">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
