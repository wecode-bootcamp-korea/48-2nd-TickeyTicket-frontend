import React, { useEffect } from 'react';
import { ZoomControl, useMap } from 'react-kakao-maps-sdk';
import { MdOutlineMyLocation } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

const MapController = ({ setMyLocation, myLocation }) => {
  const map = useMap();

  const handleMyLocation = e => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        map.setCenter(new window.kakao.maps.LatLng(latitude, longitude));
      },
      error => {
        console.error('내 위치를 가져오는 데 실패했습니다.', error);
      },
    );
  };

  return (
    <>
      <ZoomControl />
      <button
        type="button"
        className="buttonMyLocation absolute block top-[196px] right-[2px] w-[32px] h-[32px] bg-white rounded-[3px] z-10 shadow-md"
        onClick={handleMyLocation}
      >
        <Tooltip
          anchorSelect=".buttonMyLocation"
          content="내위치"
          place="left"
        />
        <MdOutlineMyLocation className="m-auto" />
      </button>
    </>
  );
};

export default MapController;
