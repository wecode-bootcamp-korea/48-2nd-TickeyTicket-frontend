import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import Loading from '../components/Loading/Loading';
import MapController from '../components/Map/MapController';

const MapPage = () => {
  const [level, setLevel] = useState();
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
    <div className="mapPage relative w-full h-[calc(100vh_-_141px)]">
      <Map
        id="map"
        center={MyLocation.center}
        level={3}
        style={{
          width: '100%',
          height: '100%',
        }}
        onZoomChanged={map => setLevel(map.getLevel())}
      >
        <MapController />
      </Map>
      <Loading />
    </div>
  );
};

export default MapPage;
