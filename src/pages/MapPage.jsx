import React, { useEffect, useState, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import axios from 'axios';
import Loading from '../components/Loading/Loading';
import MapController from '../components/Map/MapController';
import EventMarker from '../components/Map/EventMarker';
import ButtonHome from '../components/Map/ButtonHome';

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
  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.58.52.58:3000/main/map');
      setMarkersArray(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const getLocationAndFetchData = async () => {
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
    };
    getLocationAndFetchData();
  }, []);

  useEffect(() => {
    if (myRef.current) {
      window.scrollTo({
        top: myRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    fetchData();
    console.log(markersArray);
  }, [myLocation.center.lat, myLocation.center.lng]);
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
          {markersArray.length > 0 &&
            markersArray.map(value => (
              <EventMarker
                key={`EventMarker-${value.latlng.lat}-${value.latlng.lng}`}
                position={value.latlng}
                data={value}
                setIsVisible={setIsVisible}
                isVisible={value.productId === isVisible}
                myLocation={myLocation}
              />
            ))}
          <ButtonHome />
        </Map>
      )}
    </div>
  );
};

export default MapPage;
