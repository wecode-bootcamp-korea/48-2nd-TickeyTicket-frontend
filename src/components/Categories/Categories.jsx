import React, { useState } from 'react';
import MainCard from './MainCard';
import { useNavigate } from 'react-router-dom';

const Categories = ({ data, genreId }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
    if (!data.length > 0) {
      navigate('/');
    } else {
      navigate(`/main?genreId=${data[0].genreId}`);
    }
  };

  return (
    <div className="categories">
      <div className="categories relative mt-24 mb-48">
        <div className="categoryHeader flex justify-between mb-6">
          <div className="cardTitle text-2xl font-bold">
            주목할 만한 {genreId}
          </div>

          <button
            className={`more p-1 pl-5 pr-5 border border-gray-500 rounded-3xl text-gray-500 ${
              data.length <= 0
                ? 'cursor-default'
                : 'hover:border-black hover:bg-black hover:text-white'
            }`}
            onClick={handleClick}
          >
            더 보기
          </button>
        </div>
        <div className="cardContainer w-full h-full">
          <div className="cardSlideBox h-80 overflow-hidden">
            <div className="cards flex gap-3">
              <MainCard data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
