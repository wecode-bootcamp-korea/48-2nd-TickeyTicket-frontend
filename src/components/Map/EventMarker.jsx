import React, { useEffect, useState } from 'react';
import { useMap, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import MapCard from './MapCard';
import './EventMarker.css';

const EventMarker = ({ position, data, setIsVisible, isVisible }) => {
  const map = useMap();
  const [mainCardData, setMainCardData] = useState([]);

  const handleMarkerClick = marker => {
    map.panTo(marker.getPosition());
    // setIsVisible(data.productId);
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(data.productId);
    }
  };

  useEffect(() => {
    setMainCardData(data);
  }, [mainCardData]);

  const isToggled = () => {
    setMainCardData(data);
  };

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
          <MapCard
            data={data}
            isToggled={isToggled}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        </CustomOverlayMap>
      )}
    </>
  );
};

export default EventMarker;
