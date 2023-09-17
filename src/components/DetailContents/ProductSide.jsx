import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from './Calendar';

const ProductSide = ({ startDate, endDate, startTime, availableTicket }) => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const productSideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const productSide = productSideRef.current;
      if (productSide) {
        const scrollThreshold = window.innerHeight * 0.2; // 스크롤을 10% 내린 위치
        const isScrollPastThreshold = window.scrollY > scrollThreshold;

        if (isScrollPastThreshold) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const sideStyle = isSticky ? { position: 'fixed', top: -70 } : {};

  const getTokenLocalStorage = () => {
    return localStorage.getItem('token') || null;
  };
  const Token = getTokenLocalStorage();
  const handleClick = () => {
    if (!Token) {
      navigate('/login');
    } else {
      navigate('/payment');
    }
  };

  return (
    <div className="productSide container fixed top-20 m-auto w-0 ">
      <div
        ref={productSideRef}
        style={sideStyle}
        className="side absolute bg-black rounded-lg z-10"
      >
        <div className="side absolute top-20 left-[1000px] bg-white rounded-lg z-10">
          <div>
            <div className="sideMain flex-col border-mediumgray border-[1px] rounded-lg">
              <div className="sideContainer border-mediumgray border-b-[1px] p-3">
                <div className="sideHeader">관람일</div>
                <div className="sideContent p-3 pb-0">
                  <Calendar startDate={startDate} endDate={endDate} />
                </div>
              </div>
              <div className="sideContainer p-3">
                <div className="sideHeader">공연시간</div>
                <div className="sideContent p-3">
                  <div className="sideTimeTable bg-babypink p-3 pl-5 h-12 rounded-xl text-brand font-bold">
                    {startTime.slice(0, 5)}
                  </div>
                  <div className="sideRemainTable mt-4 flex gap-2 pl-2 text-sm">
                    잔여석
                    <div className="remainNumber">{availableTicket}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sideBtnWrap flex flex-col gap-2 mt-4 pb-[300px]">
              <button
                className="sideBookingBtn bg-brand text-white text-xl font-bold p-4 rounded-xl"
                onClick={handleClick}
              >
                예매하기
              </button>
              <button className="sideLikeBtn bg-white border-brand border-2 text-brand text-xl font-bold p-4 rounded-xl">
                관심함에 담기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSide;
