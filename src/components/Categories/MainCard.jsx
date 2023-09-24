import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import { getLocationAndFetchData } from '../../utils/getLocationAndFetchData';

const MainCard = ({ data }) => {
  const [mainCardData, setMainCardData] = useState(data);
  const navigate = useNavigate();
  const [myLocation, setMyLocation] = useState({
    lat: null,
    lng: null,
    errMsg: null,
  });

  const isToggled = async item => {
    try {
      const Token = localStorage.getItem('token');

      if (!Token) {
        navigate('/login');
        return;
      }

      await axios.post(
        `http://10.58.52.58:3000/wishlist/user-wishlist/${item.productId}`,
        {},
        {
          headers: {
            authorization: `${Token}`,
          },
        },
      );
      const response = await axios.get(
        `http://10.58.52.58:3000/main?lat=${myLocation.lat}&lng=${myLocation.lng}`,
      );
      // 전체 데이터를 setMainCardData하는게 아니라
      // 좋아요를 누른 작품의 genreId랑 같은것들만 setMainCardData 해주면 mainCardData가 정상적으로 작동을 하겠죠 왜냐면 mainCardData의 원본은 genreId별로 정제된 데이터기 때문이죠
      setMainCardData(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    getLocationAndFetchData(setMyLocation);
  }, []);

  useEffect(() => {
    if (!myLocation.lat) return;
  }, [myLocation.lat, myLocation.lng]);

  if (mainCardData.length <= 0) return <div>공연을 준비중입니다.</div>;

  return data.map(data => (
    <div
      className="maincard relative shrink-0 w-[23.5%] rounded-xl shadow-md cursor-pointer"
      key={data.id}
    >
      <div
        className="showImg w-full h-52 rounded-t-xl bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${data.thumbnailImageUrl})`,
          backgroundSize: 'contain',
        }}
        onClick={() => {
          navigate(`/detail/${data.productId}`);
        }}
      />
      <div className="cardTop absolute top-0 p-2 flex justify-between w-full">
        <div className="tag bg-brand">마감 임박</div>
        <div>
          {/* <div onClick={() => isToggled(data)}>
            {data.isLiked ? (
              <VscHeartFilled className="w-6 h-6 text-brand cursor-pointer" />
            ) : (
              <VscHeart className="w-6 h-6 cursor-pointer" />
            )}
          </div> */}
        </div>
      </div>
      <div className="showReport p-2 pl-3">
        <div>
          {data.genreName} &lt;{data.name}&gt;
        </div>
        <div className="text-xs">{data.performPlace}</div>
        <div className="text-xs">
          {data.startDate} ~ {data.endDate}
        </div>
      </div>
    </div>
  ));
};
export default MainCard;
