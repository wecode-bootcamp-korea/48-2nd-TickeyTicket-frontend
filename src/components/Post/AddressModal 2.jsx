import axios from 'axios';
import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const REST_API_KEY = '927a7d4eca2803289b8c12dca02ed12d';

export default function AddressModal({
  setAddress,
  setPlaceName,
  setPlaceX,
  setPlaceY,
  onClose,
}) {
  const [word, setWord] = useState('');
  const [resultData, setResultData] = useState([]);

  const onChangeSearch = event => {
    setWord(event.target.value);
  };

  const handleComplete = () => {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?&radius=20000&query=${word}`,
        { headers: { Authorization: `KakaoAK ${REST_API_KEY}` } },
      )
      .then(res => {
        setResultData(res.data.documents);
      })
      .catch(() => {
        alert('다시 시도해주세요');
      });
  };

  const handlePlace = (name, address, coordinateX, coordinateY) => {
    setAddress(name);
    setPlaceName(address);
    setPlaceX(coordinateX);
    setPlaceY(coordinateY);
    onClose();
  };

  return (
    <section
      className="fixed flex content-center justify-center bg-black bg-opacity-50 w-full h-full z-[9999] top-0 left-0 right-0 bottom-0"
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="my-5 mx-auto bg-white box-border rounded outline-none">
        <div className="relative w-[450px] h-[600px] rounded bg-white text-neutral-800 pt-10 px-10 z-[9999]">
          <div className=" text-xl text-center block">주소 검색</div>
          <button
            className="flex justify-center items-center absolute top-[10px] right-[10px] w-10 h-10 border-none cursor-pointer bg-white"
            onClick={() => onClose()}
          >
            닫기
          </button>
          <div className="">
            <div className="w-full h-[50px] border border-neutral-500 p-2 content-between flex rounded items-center">
              <input
                className="w-full h-full border-transparent"
                type="text"
                value={word}
                id="keyword"
                placeholder="주소나 키워드를 검색해주세요."
                onChange={onChangeSearch}
              />
              <IoSearchOutline
                type="button"
                onClick={handleComplete}
                style={{
                  marginLeft: 'auto',
                  display: 'flex-end',
                  fontSize: '20px',
                  color: '#B6B6B6',
                }}
              />
            </div>
            <div className="block w-full h-[550px] overflow-y-scroll bg-zinc-400 overflow-x-hidden mx-auto mb-[5px]">
              {resultData.map(info => {
                return (
                  <div key={1}>
                    <div
                      className="m-[10px] cursor-pointer"
                      onClick={() => {
                        handlePlace(
                          info.place_name,
                          info.address_name,
                          info.x,
                          info.y,
                        );
                      }}
                    >
                      <div className="mb-[5px]">{info.place_name}</div>
                      <div className="mb-[15px]">{info.address_name}</div>
                    </div>
                    <hr className="w-full bg-neutral-500 h-[1px] border-transparent" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
