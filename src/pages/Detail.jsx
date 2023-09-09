import React, { useState, useEffect } from 'react';
import ProductSide from '../components/DetailContents/ProductSide';
import ProductMainTop from '../components/DetailContents/ProductMainTop';
import ProductContents from '../components/DetailContents/ProductContents';
import ProductReview from '../components/DetailContents/ProductReview';

const Detail = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const navData = ['공연정보', '판매정보', '관람후기', '기대평', 'Q&A'];

  const handleClick = index => {
    setActiveNavIndex(index);
  };

  return (
    <div className="detail">
      <div className="container">
        <div className="productMain relative bg-white w-[53rem] mt-8 mb-[9rem]">
          <ProductMainTop />
          <div className="productMainBody">
            <div className="productNav pt-4 mb-10 sticky top-0 bg-white">
              <ul className="productNavList w-full flex gap-10 text-darkgray font-bold border-b-[1.5px] border-mediumgray">
                {navData.map((item, index) => (
                  <li
                    className={`prdductNavItem p-3 px-6 cursor-pointer ${
                      index === activeNavIndex ? 'isActive' : ''
                    }`}
                    key={index}
                    onClick={() => handleClick(index)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {activeNavIndex === 0 && <ProductContents />}
            {activeNavIndex === 1 && <ProductContents />}
            {activeNavIndex === 2 && <ProductReview />}
            {activeNavIndex === 3 && <ProductReview />}
            {activeNavIndex === 4 && <ProductReview />}
          </div>
        </div>
        <ProductSide />
      </div>
    </div>
  );
};

export default Detail;
