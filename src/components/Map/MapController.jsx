import React from 'react';
import { ZoomControl } from 'react-kakao-maps-sdk';
import { MdOutlineMyLocation } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

const MapController = ({ setMyLocation, myLocation }) => {
  const handleMyLocation = () => {
    setMyLocation(prevLocation => ({
      ...prevLocation,
      center: {
        lat: 33.450701,
        lng: 126.570667,
      },
    }));
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
