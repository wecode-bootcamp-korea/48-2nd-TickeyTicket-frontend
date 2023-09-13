import { ZoomControl } from 'react-kakao-maps-sdk';
import { MdOutlineMyLocation } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

const MapController = ({ setMyLocation, myLocation }) => {
  const handleMyLocation = () => {
    setMyLocation({
      center: myLocation.center,
      isPanto: true,
    });
  };
  return (
    <>
      <ZoomControl />
      <div className="mapController absolute w-[100%] h-[100%] left-0 top-0 z-10 overflow-hidden">
        <button
          type="button"
          className="button absolute block top-[196px] right-[2px] w-[32px] h-[32px] bg-white rounded-[3px]"
          onClick={handleMyLocation}
        >
          <Tooltip anchorSelect=".button" content="내위치" place="left" />
          <MdOutlineMyLocation className="m-auto" />
        </button>
      </div>
    </>
  );
};

export default MapController;
