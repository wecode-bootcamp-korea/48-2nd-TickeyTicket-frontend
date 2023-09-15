import React, { useEffect, useState } from 'react';
import { useMap, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import axios from 'axios';
import MapCard from './MapCard';
import './EventMarker.css';

const EventMarker = ({ position, data, setIsVisible, isVisible }) => {
  const map = useMap();
  // const [isVisible, setIsVisible] = useState(false);
  const [mainCardData, setMainCardData] = useState([]);
  //const [matchedMarker, setMatchedMarker] = useState({});

  const handleMarkerClick = marker => {
    map.panTo(marker.getPosition());
    setIsVisible(data.productId);
  };

  useEffect(() => {
    axios.get('/data/mapMarkerData.json').then(response => {
      setMainCardData(response.data);
    });
  }, [mainCardData]);

  // useEffect(() => {
  //   axios.get('/data/mapMarkerData.json').then(response => {
  //     setMainCardData(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   setMatchedMarker(mainCardData.find(el => el.id === data.product_id));
  // }, [mainCardData]);

  const isToggled = () => {
    axios.post('/data/mapMarkerData.json').then(() => {
      axios.get('/data/mapMarkerData.json').then(response => {
        setMainCardData(response.data);
      });
    });
  };

  const handleMapClick = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    map.addListener('click', handleMapClick);
    return () => {
      map.removeListener('click', handleMapClick);
    };
  }, [map]);

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
          <MapCard data={data} isToggled={isToggled} />
        </CustomOverlayMap>
      )}
    </>
  );
};

export default EventMarker;
