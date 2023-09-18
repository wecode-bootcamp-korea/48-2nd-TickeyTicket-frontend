import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SLIDES_PER_VIEW = 3;

const EventCard = () => {
  const [eventCardData, setEventCardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/data/eventCard.json').then(response => {
      setEventCardData(response.data);
    });
  }, []);

  const slidesList =
    eventCardData.length >= SLIDES_PER_VIEW * 2
      ? eventCardData
      : eventCardData.concat(eventCardData);

  return (
    <Swiper
      className="mySwiper"
      slidesPerView={SLIDES_PER_VIEW}
      spaceBetween={30}
      modules={[Pagination, Navigation]}
      navigation
      loop
    >
      {slidesList.map(data => (
        <SwiperSlide key={data.id}>
          <div
            className="eventCardImage w-full h-60 rounded-3xl mb-5 cursor-pointer bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${data.url})` }}
            onClick={() => {
              navigate(`/sub?genreId=${data.genreId}`);
            }}
          >
            <div className="showReport w-full h-full bg-white bg-opacity-50 rounded-3xl text-center px-6 pt-14">
              <div className="text-2xl font-bold">{data.name}</div>
              <div className="pb-5 text-xs">{data.period}</div>
              <div>{data.text[0]}</div>
              <div>{data.text[1]}</div>
              <div className="CardNumber absolute bottom-8 right-5">
                {data.id} / {eventCardData.length}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default EventCard;
