import React from 'react';

const ProductMainTop = ({
  id,
  name,
  generName,
  thumbnailImageUrl,
  performPlace,
  startDate,
  endDate,
  startTime,
  runningTime,
  price,
}) => {
  return (
    <div className="productMainTop" key={id}>
      <div className="summary pb-[6.5rem]">
        <div className="summaryTop mb-[1.9rem]">
          <div className="tag bg-brand">공연임박</div>
          <h1 className="prdTitle text-3xl font-bold mt-3">
            {generName} &#60;{name} &#62;
          </h1>
        </div>
        <div className="summaryBody">
          <div className="posterBox w-[19rem] h-[25rem] inline-block">
            <img
              className="posterBoxImage w-full h-full block"
              src={thumbnailImageUrl}
              alt="posterImage"
            />
          </div>
          <ul className="info inline-block w-[31.5rem] mt-[0.4rem] ml-[2.5rem] align-top">
            <li className="infoItem leading-[2.2rem] flex mb-4">
              <div className="infoLabel inline-block w-[9rem] pr-2">장소</div>
              <div className="infoDesc max-w-[39rem]">
                <div className="infoText">{performPlace}</div>
              </div>
            </li>
            <li className="infoItem leading-[2.2rem] flex mb-4">
              <div className="infoLabel inline-block w-[9rem] pr-2">
                공연기간
              </div>
              <div className="infoDesc max-w-[39rem]">
                <div className="infoText">
                  {startDate.slice(0, 10)} ~ {endDate.slice(0, 10)}
                </div>
              </div>
            </li>
            <li className="infoItem leading-[2.2rem] flex mb-4">
              <div className="infoLabel inline-block w-[9rem] pr-2">
                공연시간
              </div>
              <div className="infoDesc max-w-[39rem]">
                <div className="infoText">{startTime.slice(0, 5)}</div>
              </div>
            </li>
            <li className="infoItem leading-[2.2rem] flex mb-4">
              <div className="infoLabel inline-block w-[9rem] pr-2">
                러닝타임
              </div>
              <div className="infoDesc max-w-[39rem]">
                <div className="infoText">{runningTime.toString()}분</div>
              </div>
            </li>
            <li className="infoItem leading-[2.2rem] flex mb-4">
              <div className="infoLabel inline-block w-[9rem] pr-2">가격</div>
              <div className="infoDesc max-w-[39rem]">
                <div className="infoText">
                  {price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductMainTop;
