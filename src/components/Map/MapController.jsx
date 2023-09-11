import React from 'react';
import { ZoomControl } from 'react-kakao-maps-sdk';

const MapController = () => {
  return (
    <>
      <ZoomControl />
      <div className="mapController absolute top-[196px] left-[1144px] w-[32px] h-[32px]">
        <button
          type="button"
          className="block w-full h-full p-[1px 3px 5px] bg-accessLocation bg-no-repeat bg-[length:490px_492px] bg-left-negative-150 bg-top-negative-450 indent-1"
        >
          현위치
        </button>
      </div>
    </>
  );
};

export default MapController;
