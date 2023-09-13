import React, { useEffect, useState } from 'react';
import { useMap, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import MainCard from '../Categories/MainCard';
import './EventMarker.css';

const EventMarker = ({ position, isActiveMarker, onClick }) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);

  const handleMarkerClick = marker => {
    map.panTo(marker.getPosition());
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (!isActiveMarker)
      return () => {
        setIsVisible(false);
      };
  }, [isActiveMarker]);

  return (
    <>
      <MapMarker
        position={position}
        image={{
          src: '/assets/icon_location.png',
          size: {
            width: 50,
            height: 50,
          },
          options: {
            offset: {
              x: 27,
              y: 69,
            },
          },
        }}
        onClick={handleMarkerClick}
      />
      {isVisible && (
        <CustomOverlayMap position={position} yAnchor={1.2}>
          <MainCard />
        </CustomOverlayMap>
      )}
    </>
  );
};

export default EventMarker;
