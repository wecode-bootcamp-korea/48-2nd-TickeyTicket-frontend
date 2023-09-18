import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';

const Card = () => {
  const [subCardData, setSubCardData] = useState([]);
  const token = localStorage.getItem('token');

  const isToggled = () => {
    if (!token) {
      window.location.href = '/login';
    } else {
      axios.post('/data/mainCard.json').then(() => {
        axios.get('/data/mainCard.json').then(response => {
          setSubCardData(response.data);
        });
      });
    }
  };

  return (
    <>
      {subCardData.map(data => (
        <div
          className="card relative shrink-0 w-[22.5%] rounded-xl shadow-md cursor-pointer"
          key={data.id}
        >
          <div
            className="showImg w-full h-52 bg-cover rounded-t-xl"
            style={{ background: `url(${data.url})` }}
          />
          <div className="cardTop absolute top-0 p-2 flex justify-between w-full">
            <div className="tag bg-brand">마감 임박</div>
            <div onClick={isToggled}>
              {data.isLiked ? (
                <VscHeart className="w-6 h-6 cursor-pointer" />
              ) : (
                <VscHeartFilled className="w-6 h-6 text-brand cursor-pointer" />
              )}
            </div>
          </div>
          <div className="showReport p-2 pl-3">
            <div>
              {data.genreName} &lt;{data.name}&gt;
            </div>
            <div className="text-xs">{data.place}</div>
            <div>
              {data.startDate} ~ {data.endDate}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
