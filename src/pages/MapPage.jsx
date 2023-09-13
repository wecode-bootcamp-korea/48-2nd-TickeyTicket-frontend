import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import Loading from '../components/Loading/Loading';
import MapController from '../components/Map/MapController';

const MapPage = () => {
  const [level, setLevel] = useState(3);
  const [loading, setLoading] = useState(true);

  const [myLocation, setMyLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setMyLocation({
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            errMsg: null,
          });
          setLoading(false);
        },
        err => {
          setMyLocation(prev => ({
            ...prev,
            errMsg: err.message,
          }));
          setLoading(false);
        },
        { enableHighAccuracy: true },
      );
    } else {
      setMyLocation(prev => ({
        ...prev,
        errMsg: '현재 위치를 불러올 수 없습니다',
      }));
      setLoading(false);
    }
  }, [myLocation]);
  return (
    <div className="mapPage relative w-full h-[calc(100vh_-_141px)]">
      {loading ? ( // 로딩 중인 동안 로딩 화면 표시
        <Loading />
      ) : (
        <Map
          id="map"
          center={myLocation.center}
          level={3}
          style={{
            width: '100%',
            height: '100%',
          }}
          onZoomChanged={map => setLevel(map.getLevel())}
        >
          <MapController
            setMyLocation={setMyLocation}
            myLocation={myLocation}
          />
        </Map>
      )}
    </div>
  );
};

export default MapPage;
