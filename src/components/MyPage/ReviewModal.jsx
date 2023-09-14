import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';

export default function ReviewModal({ onClose }) {
  const starArr = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);
  const [starNum, setStarNum] = useState(0);

  return (
    <section
      className="fixed flex content-center justify-center bg-black bg-opacity-50 w-full h-full z-[100] top-0 left-0 right-0 bottom-0"
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="my-5 mx-auto bg-white box-border rounded outline-none">
        <div className="relative w-[720px] rounded bg-white text-neutral-800 pt-10 px-10 z-[9999]">
          <div className=" text-xl text-center block">리뷰쓰기</div>
          <button
            className="flex justify-center items-center absolute top-[10px] right-[10px] w-10 h-10 border-none cursor-pointer bg-white"
            onClick={() => onClose()}
          >
            닫기
          </button>
          <form>
            <div className="flex items-center mt-5 mb-[30px]">
              <img
                className="w-[100px] h-[100px] rounded"
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=240&h=240&c=c&webp=1"
                alt="사진"
              />
              <div className="flex-[1_0_0px] ml-3">
                <div className="text-xs text-neutral-500 mb-[6px]">뮤지컬</div>
                <div className="mb-[6px] text-base">핫한 공연</div>
              </div>
            </div>
            <div className="relative mb-8 w-full">
              <div className="flex items-center text-base mb-4">별점 평가</div>
              <div className="mt-0 inline-flex">
                <div className="text-base w-[55px]">만족도</div>
                {starArr.map(idx => (
                  <FiStar
                    className="text-4xl"
                    key={idx}
                    onClick={() => setStarNum(idx)}
                    onMouseEnter={() => (starNum === 0 ? setHover(idx) : null)}
                    onMouseLeave={() => setHover(0)}
                    fill={idx <= (hover || starNum) ? '#000' : '#E5E5E5'}
                  />
                ))}
              </div>
            </div>
            <div className="relative mb-8 w-full">
              <div className="flex items-center text-base mb-4">리뷰 작성</div>
              <textarea
                className="h-14 pb-[25px] min-h-[110px] text-base resize-none leading-5 pt-[9px] block rounded border border-gray-500 bg-white text-zinc-800 w-full py-[9px] px-[15px]"
                placeholder="자세하고 솔직한 리뷰는 다른 이용자에게 큰 도움이 됩니다. (최소 20자 이상)"
              />
            </div>
            <button className="w-full h-[45px] leading-[43px] mb-8 bg-brand border-brand text-white rounded border-transparent border text-[17px] decoration-transparent text-center cursor-pointer">
              완료
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
