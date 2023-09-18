import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';

const MainCard = ({ data }) => {
  const [mainCardData, setMainCardData] = useState([data]);
  const navigate = useNavigate();

  const isToggled = async item => {
    try {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        navigate('/login');
        return;
      }

      await axios.post(`http://10.58.52.158:3000/wishlist/${item.productId}`);
      const response = await axios.get(
        'http://10.58.52.158:3000/wishlist/user-wishlist',
      );
      setMainCardData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  if (!data.length > 0) return <div>데이터가 없습니다.</div>;

  return (
    <>
      {mainCardData[0].map(data => (
        <div
          className="maincard relative shrink-0 w-24.3% rounded-xl shadow-md cursor-pointer"
          key={data.productId}
        >
          <div
            className="showImg w-full h-52 rounded-t-xl bg-cover bg-no-repeat bg-center"
            style={{ background: `url(${data.thumbnailImageUrl})` }}
          />
          <div className="cardTop absolute top-0 p-2 flex justify-between w-full">
            <div className="tag bg-brand">마감 임박</div>
            <div onClick={() => isToggled(data)}>
              {data.isLiked ? (
                <VscHeartFilled className="w-6 h-6 text-brand cursor-pointer" />
              ) : (
                <VscHeart className="w-6 h-6 cursor-pointer" />
              )}
            </div>
          </div>
          <div className="showReport p-2 pl-3">
            <div>
              {data.genreName} {data.name}
            </div>
            <div>{data.place}</div>
            <div>
              {data.startDate} ~ {data.endDate}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MainCard;
