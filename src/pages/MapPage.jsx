import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const MapPage = () => {
  const [MyLocation, setMyLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setMyLocation(prev => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        err => {
          setMyLocation(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
        { enableHighAccuracy: true },
      );
    } else {
      setMyLocation(prev => ({
        ...prev,
        errMsg: '현재 위치를 불러올 수 없습니다',
        isLoading: false,
      }));
    }
  }, []);

  return (
    <Map
      id="map"
      center={MyLocation.center}
      level={3}
      style={{
        width: '100%',
        height: '100vh',
      }}
    />
  );
};

export default MapPage;
