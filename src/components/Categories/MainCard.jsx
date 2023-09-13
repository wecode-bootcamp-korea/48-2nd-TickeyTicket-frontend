import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';

const MainCard = () => {
  const [mainCardData, setMainCardData] = useState([]);

  const isToggled = () => {
    axios.post('/data/mainCard.json').then(() => {
      axios.get('/data/mainCard.json').then(response => {
        setMainCardData(response.data);
      });
    });
  };

  useEffect(() => {
    axios.get('/data/mainCard.json').then(response => {
      setMainCardData(response.data);
    });
  }, []);

  return (
    <>
      {mainCardData.map(data => (
        <div
          className="maincard relative shrink-0 w-24.3% rounded-xl shadow-md cursor-pointer"
          key={data.id}
        >
          <div
            className="showImg w-full h-52 rounded-t-xl bg-cover bg-no-repeat bg-center"
            style={{ background: `url(${data.url})` }}
          />
          <div className="cardTop absolute top-0 p-2 flex justify-between w-full">
            <div className="tag bg-brand">마감 임박</div>
            <div onClick={isToggled}>
              {data.isLiked ? (
                <VscHeartFilled className="w-6 h-6 text-brand cursor-pointer" />
              ) : (
                <VscHeart className="w-6 h-6 cursor-pointer" />
              )}
            </div>
          </div>
          <div className="showReport p-2 pl-3">
            <div>{data.name}</div>
            <div>{data.place}</div>
            <div>{data.period}</div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MainCard;
