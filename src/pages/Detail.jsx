import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductSide from '../components/DetailContents/ProductSide';
import ProductMainTop from '../components/DetailContents/ProductMainTop';
import ProductContents from '../components/DetailContents/ProductContents';
import ProductReview from '../components/DetailContents/ProductReview';

const Detail = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [detailData, setDetailData] = useState({});
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 중 여부 상태 추가
  const { pathname } = useLocation();
  const productId = pathname.slice(8);
  const [selectedDate, setSelectedDate] = useState();

  const navData = [
    '공연정보',
    '판매정보',
    `관람후기(${reviewData.length})`,
    '기대평',
    'Q&A',
  ];

  const handleClick = index => {
    setActiveNavIndex(index);
  };

  const getDetailData = async () => {
    try {
      const response = await axios.get(
        `http://10.58.52.77:3000/product/productdetails/${productId}`,
      );
      setDetailData(response.data.data.allDetails[0]);
      setReviewData(response.data.data.allReviews);
      setIsLoading(false); // 데이터 로드 완료 시 isLoading을 false로 설정
    } catch (error) {
      console.error('error fetching data', error);
      setIsLoading(false); // 데이터 로드 실패 시 isLoading을 false로 설정
    }
  };

  useEffect(() => {
    getDetailData();
  }, []); // 초기 로딩 시 한 번만 실행

  // 데이터가 로드되지 않았을 때 로딩 상태를 표시
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <div className="container relative flex justify-between">
        <div className="productMain relative bg-white w-[53rem] mt-8 mb-[9rem]">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ProductMainTop data={detailData} />
          )}
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
                importantNotice={detailData.importantNotice}
                discountInformation={detailData.discountInformation}
              />
            )}
            {activeNavIndex === 1 && <ProductContents />}
            {activeNavIndex === 2 && <ProductReview reviewData={reviewData} />}
            {activeNavIndex === 3 && <ProductReview />}
            {activeNavIndex === 4 && <ProductReview />}
          </div>
        </div>
        <ProductSide
          data={detailData}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
};

export default Detail;
