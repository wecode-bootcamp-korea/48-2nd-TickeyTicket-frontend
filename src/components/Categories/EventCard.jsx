import React from 'react';

const EventCard = () => {
  return (
    <div className="eventCard w-full">
      <div className="eventCardImage w-full h-48 bg-cover bg-[url('./assets/images/party.jpeg')] rounded-full mb-5">
        <div className="eventNumber w-9 h-9 ml-2 rounded-full bg-brand text-center text-2xl text-white">
          1
        </div>
      </div>
      <div className="eventCardTitle text-center">
        이벤트 및 소모임
        <br />
        우선신청, 무료, 할인
      </div>
    </div>
  );
};
export default EventCard;
