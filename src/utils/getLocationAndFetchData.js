export const getLocationAndFetchData = setLocation => {
  console.log(Boolean(navigator.geolocation));
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          errMsg: null,
        });
      },
      err => {
        setLocation({
          lat: null,
          lng: null,
          errMsg: err.message,
        });
      },
      { enableHighAccuracy: true },
    );
  } else {
    setLocation({
      lat: null,
      lng: null,
      errMsg: '현재 위치를 불러올 수 없습니다',
    });
  }
};
