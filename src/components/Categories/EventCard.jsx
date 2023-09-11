import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const EventCard = () => {
  const [eventCardData, setEventCardData] = useState([]);

  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 5;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  useEffect(() => {
    axios.get('/data/eventCard.json').then(response => {
      setEventCardData(response.data);
    });
  }, []);

  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      navigation={true}
      modules={[Pagination, Navigation]}
      loop={true}
      className="mySwiper"
    >
      {eventCardData.map(data => (
        <SwiperSlide key={data.id}>
          <div
            className="eventCardImage w-full h-60 rounded-3xl mb-5 cursor-pointer bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${data.url})` }}
          >
            <div className="showReport w-full h-full bg-white bg-opacity-50 rounded-3xl text-center px-6 pt-14">
              <div className="text-2xl font-bold">{data.name}</div>
              <div className="pb-5 text-xs">{data.period}</div>
              <div>{data.text[0]}</div>
              <div>{data.text[1]}</div>
              <div className="CardNumber absolute bottom-8 right-5">
                {data.id} / 5
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default EventCard;
