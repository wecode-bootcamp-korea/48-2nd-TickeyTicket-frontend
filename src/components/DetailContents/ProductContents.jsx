// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ProductContents = ({ performersInfo, productDescription }) => {
  return (
    <div className="productContents">
      <div className="content mb-32 casting">
        <h1 className="contentTitle font-bold text-xl">캐스팅</h1>
        <div className="castingWrap mt-12">
          {/* <ul className="castingList flex flex-wrap gap-10 ">
            {performersInfo.map(data => (
              <li className="castingItem" key={data.actorImageUrl}>
                <div className="castingTop w-28 h-28">
                  <img
                    className="rounded-full"
                    src={data.actorImageUrl}
                    alt="출연자이미지"
                  />
                </div>
                <div className="castingInfo text-center pt-2">
                  <div className="castingActor font-bold">
                    {data.performerDescription}
                  </div>
                  <div className="castingName">{data.performerName}</div>
                </div>
              </li>
            ))}
          </ul> */}
          {/* <div className="contentToggleBtn mt-10 flex items-center justify-center bg-gray-100 rounded-lg p-5 text-darkgray">
            더보기
            <IoIosArrowDown />
          </div>*/}
        </div>
      </div>
      <div className="content mb-32">
        <h1 className="contentTitle font-bold text-xl">공지사항</h1>
        <div className="contentDetail mt-8 leading-10">
          <p className="contentDetailText">{productDescription}</p>
        </div>
      </div>
      <div className="content mb-32">
        <h1 className="contentTitle font-bold text-xl">할인정보</h1>
        <div className="contentDetail mt-8 leading-10">
          <p className="contentDetailText">{productDescription}</p>
        </div>
      </div>
      <div className="content mb-32">
        <h1 className="contentTitle font-bold text-xl">공연상세</h1>
        <div className="contentDetail mt-8 leading-10">
          <p className="contentDetailText">{productDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductContents;
