import React, { useCallback, useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import AddressModal from './AddressModal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { uploadImage } from '../../api/uploader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OPTIONS = [
  {
    id: 3,
    tabName: '뮤지컬',
  },
  {
    id: 4,
    tabName: '연극',
  },
  {
    id: 5,
    tabName: '클래식',
  },
  {
    id: 6,
    tabName: '무용',
  },
  {
    id: 7,
    tabName: '전시',
  },
  {
    id: 8,
    tabName: '행사',
  },
  {
    id: 9,
    tabName: '음악',
  },
  {
    id: 10,
    tabName: '코미디',
  },
  {
    id: 11,
    tabName: '버스킹',
  },
];

export default function PostFormSection() {
  const [product, setProduct] = useState({});
  const [address, setAddress] = useState('주소를 등록해주세요!');
  const [placeName, setPlaceName] = useState('');
  const [placeX, setPlaceX] = useState(126.570667);
  const [placeY, setPlaceY] = useState(33.450701);
  const [imgUrl, setImgUrl] = useState({});
  const [addressDetail, setAddressDetail] = useState('');
  const [files, setFiles] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [modal, setModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [tk, setTk] = useState('');

  const Token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!Token) {
      navigate('/login');
    }
  }, [Token, navigate]);

  function getDatesStartToEnd(startDate, endDate) {
    if (!(startDate instanceof Date && endDate instanceof Date)) {
      console.log('Not Date Object');

      return;
    }

    const result = [];

    for (let i = 0; i <= endDate.getDate() - startDate.getDate(); i++) {
      const curDate = new Date(startDate);

      curDate.setDate(startDate.getDate() + i);

      result.push(
        `${curDate.getFullYear()}/${
          curDate.getMonth() + 1
        }/${curDate.getDate()}`,
      );
    }

    return result;
  }

  const dateRange = getDatesStartToEnd(startDate, endDate);
  const setChangeDate = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleChange = (e, index) => {
    const { name, value, files: selectedFile } = e.target;
    if (name === 'file') {
      setFiles(prevFiles => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index] = selectedFile[0];

        return updatedFiles;
      });
      return;
    }
    setProduct(product => ({ ...product, [name]: value }));
  };

  async function addNewPost(product, image) {
    const requestData = {
      ...product,
      thumbnailImageUrl: imgUrl[0],
      registrationImageUrl: imgUrl[1],
      actorImageUrl: [imgUrl[2], imgUrl[3], imgUrl[4], imgUrl[5], imgUrl[6]],
      startDate,
      placeName,
      addressDetail,
      address,
      coordinateX: placeX,
      coordinateY: placeY,
    };
    await axios
      .post('http://10.58.52.58:3000/registerproduct', requestData, {
        headers: {
          authorization: `${Token}`,
        },
      })
      .then(res => res)
      .catch(error => {
        console.error('Error adding product:', error);
      });
  }

  const handleAddNewPost = (product, image) => {
    setIsUploading(true);
    uploadImage(files)
      .then(url => {
        console.log(url);
        setImgUrl(url);
      })
      .finally(() => setIsUploading(false));
    addNewPost(product);
  };

  const handleCategory = id => {
    setSelectedCategory(id);
  };

  const onChangeAddressDetail = useCallback(
    e => {
      setAddressDetail(e.target.value);
    },
    [setAddressDetail],
  );

  return (
    <div>
      <div className="my-5">
        <div className="block pb-3 text-base">
          어떤 공연을 만들고 싶으신가요?
        </div>
        <select
          onChange={e => handleCategory(e.target.value)}
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
        >
          {OPTIONS.map((option, index) => (
            <option value={option.id} key={index} name="categoryGenresId">
              {option.tabName}
            </option>
          ))}
        </select>
      </div>
      <div className="my-5">
        <div className="block pb-3 text-base">공연명을 입력해주세요.</div>
        <input
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="name"
          value={product.name ?? ''}
          placeholder="공연명"
          // required
          onChange={handleChange}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">
          공연 러닝타임을 입력해주세요.
        </div>
        <p className="pb-3">공연 러닝타임은 분 단위로 작성해주세요. (예)120</p>
        <input
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="runningTime"
          value={product.runningTime ?? ''}
          placeholder="공연 러닝타임"
          // required
          onChange={handleChange}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">
          공연 시작 시간을 입력해주세요.
        </div>
        <p className="pb-3">공연 러닝타임은 분 단위로 작성해주세요. (예)120</p>
        <input
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="startTime"
          value={product.startTime ?? ''}
          placeholder="공연 시작 시간"
          // required
          onChange={handleChange}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">공연 가격을 입력해주세요.</div>
        <p className="pb-3">공연 가격은 숫자만 입력해주세요. (예) 120000</p>
        <input
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="price"
          value={product.price ?? ''}
          placeholder="공연 가격"
          // required
          onChange={handleChange}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">공연 날짜를 선택해주세요.</div>
        <div className="text-[15px] mb-2 rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400">
          <DatePicker
            className="w-full h-full"
            onChange={setChangeDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            withPortal
            shouldCloseOnSelect={false}
          />
        </div>
      </div>
      <div className="my-5">
        <div className="block pb-3 text-base">공연 장소를 선택해주세요.</div>
        <input
          className="text-[15px] mb-2 rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="place"
          value={placeName ?? ''}
          placeholder=""
          // required
          // onChange={handleChange}
        />
        <div className="flex mb-2">
          <input
            className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400 mr-[10px]"
            type="text"
            name="address"
            value={address ?? ''}
            // required
            // onChange={handleChange}
          />
          <button
            className="flex-[0_0_auto] w-[100px] bg-brand border-brand text-white rounded h-10"
            onClick={() => {
              setModal(!modal);
            }}
          >
            주소찾기
          </button>
        </div>
        <input
          className="text-[15px] mb-2 rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="addressDetail"
          value={addressDetail ?? ''}
          placeholder="상세 주소를 입력해주세요.(선택)"
          // required
          onChange={onChangeAddressDetail}
        />
        <div className="flex first-letter:w-full h-[150px] ">
          <Map
            id="map"
            // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: placeY,
              lng: placeX,
            }}
            style={{
              // 지도의 크기
              width: '100%',
              height: '100%',
            }}
            level={4} // 지도의 확대 레벨
          >
            <MapMarker // 마커를 생성합니다
              position={{
                // 마커가 표시될 위치입니다
                lat: placeY,
                lng: placeX,
              }}
            />
          </Map>
        </div>
      </div>
      <div className="my-5">
        <div className="block pb-3 text-base">공연 포스터를 선택해주세요.</div>
        <input
          type="file"
          accept="image/*"
          name="file"
          // required
          onChange={e => handleChange(e, 0)}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">
          사업사등록 사진을 입력해주세요.
        </div>
        <p className="pb-3">화질이 선명해야 합니다.</p>
        <input
          type="file"
          accept="image/*"
          name="file"
          // required
          onChange={e => handleChange(e, 1)}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">
          공연 출연진 정보를 입력해주세요.
        </div>
        <p className="pb-3">최대 5명까지만 등록이 가능합니다.</p>
        <input
          type="file"
          accept="image/*"
          name="file"
          // required
          onChange={e => handleChange(e, 2)}
        />
        <input
          className="text-[15px] mb-2 rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="performerName"
          value={product.performerName ?? ''}
          placeholder="입력해주세요.(선택)"
          // required
          onChange={handleChange}
        />
        <input
          className="text-[15px] mb-2 rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="performerDescription"
          value={product.performerDescription ?? ''}
          placeholder="입력해주세요.(선택)"
          // required
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          name="file"
          // required
          onChange={e => handleChange(e, 3)}
        />
        <input
          type="file"
          accept="image/*"
          name="file"
          // required
          onChange={e => handleChange(e, 4)}
        />
        <input
          type="file"
          accept="image/*"
          name="file"
          // required
          onChange={e => handleChange(e, 5)}
        />
        <input
          type="file"
          accept="image/*"
          name="file"
          // required
          onChange={e => handleChange(e, 6)}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">
          공연 공지사항을 입력해주세요.
        </div>
        <input
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="importantNotice"
          value={product.importantNotice ?? ''}
          placeholder="공연 공지사항"
          // required
          onChange={handleChange}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">
          공연 할인정보를 입력해주세요.
        </div>
        <input
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="discountInformation"
          value={product.discountInformation ?? ''}
          placeholder="공연 러닝타임"
          // required
          onChange={handleChange}
        />
      </div>
      <div className="my-5">
        <div className="block pb-1 text-base">
          그 외 공연 정보를 입력해주세요.
        </div>
        <input
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="productDescription"
          value={product.productDescription ?? ''}
          placeholder="공연 러닝타임"
          // required
          onChange={handleChange}
        />
      </div>
      {modal ? (
        <AddressModal
          modal={modal}
          onClose={() => {
            setModal(false);
          }}
          setAddress={setAddress}
          setPlaceName={setPlaceName}
          setPlaceX={setPlaceX}
          setPlaceY={setPlaceY}
        />
      ) : null}
      <button
        className="w-full mt-8 bg-brand border-brand text-white py-3 rounded cursor-pointer"
        onClick={() => handleAddNewPost()}
      >
        공연 등록하기
      </button>
    </div>
  );
}
