import React, { useEffect, useState, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import Loading from '../components/Loading/Loading';
import MapController from '../components/Map/MapController';
import EventMarker from '../components/Map/EventMarker';

const MapPage = () => {
  const myRef = useRef(null);
  const [level, setLevel] = useState(3);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [myLocation, setMyLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
  });

  const [markersArray, setMarkersArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/mapMarkerData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMarkersArray(data);
      });
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
  }, []);

  useEffect(() => {
    if (myRef.current) {
      window.scrollTo({
        top: myRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="mapPage relative w-full h-[100vh]" ref={myRef}>
      {loading ? ( // 로딩 중인 동안 로딩 화면 표시
        <Loading />
      ) : (
        <Map
          id="map"
          center={myLocation.center}
          level={3}
          style={{
            width: '100%',
            height: '100vh',
          }}
          onZoomChanged={map => setLevel(map.getLevel())}
        >
          <MapController
            setMyLocation={setMyLocation}
            myLocation={myLocation}
          />
          {markersArray.map(value => (
            <EventMarker
              key={`EventMarker-${value.latlng.lat}-${value.latlng.lng}`}
              position={value.latlng}
              data={value}
              setIsVisible={setIsVisible}
              isVisible={value.id === isVisible}
              myLocation={myLocation}
            />
          ))}
        </Map>
      )}
    </div>
  );
};

export default MapPage;
