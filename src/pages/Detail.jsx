import React, { useState, useEffect } from 'react';
import ProductSide from '../components/DetailContents/ProductSide';
import ProductMainTop from '../components/DetailContents/ProductMainTop';
import ProductContents from '../components/DetailContents/ProductContents';
import ProductReview from '../components/DetailContents/ProductReview';
import axios from 'axios';

const Detail = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [detailData, setDetailData] = useState({});
  const [reviewData, setReviewData] = useState([]);
  const navData = ['공연정보', '판매정보', '관람후기', '기대평', 'Q&A'];

  const handleClick = index => {
    setActiveNavIndex(index);
  };

  useEffect(() => {
    axios
      .get('/data/detailData.json')
      .then(response => {
        setDetailData(response.data.allDetails[0]);
        setReviewData(response.data.allReviews);
      })
      .catch(error => {
        console.error('error fetching data', error);
      });
  }, []);
  console.log('디테일데이터', detailData);
  console.log('리뷰데이터', reviewData);

  return (
    <div className="detail">
      <div className="container relative">
        <div className="productMain relative bg-white w-[53rem] mt-8 mb-[9rem]">
          <ProductMainTop
            key={detailData.id}
            name={detailData.name}
            generName={detailData.generName}
            thumbnailImageUrl={detailData.thumbnailImageUrl}
            performPlace={detailData.performPlace}
            startDate={detailData.startDate}
            endDate={detailData.endDate}
            startTime={detailData.startTime}
            runningTime={detailData.runningTime}
            price={detailData.price}
          />
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
            {activeNavIndex === 0 && (
              <ProductContents
                performersInfo={detailData.performersInfo}
                productDescription={detailData.productDescription}
              />
            )}
            {activeNavIndex === 1 && <ProductContents />}
            {activeNavIndex === 2 && (
              <ProductReview
                writtenDate={reviewData.writtenDate}
                nickname={reviewData.nickname}
                title={reviewData.title}
                content={reviewData.content}
                rating={reviewData.rating}
              />
            )}
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
