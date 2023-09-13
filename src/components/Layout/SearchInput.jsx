import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { krRegex, trimmingKeyword } from '../../common/util';

export default function SearchInput({ inputRef }) {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  // 검색결과 submit 함수
  const submitKeyword = async e => {
    e.preventDefault();

    // 검색 키워드 공백제거
    const searchKeyword = trimmingKeyword(keyword);

    if (!searchKeyword) {
      alert('검색어를 입력해주세요.');
      return;
    }

    let searchResult = {};

    // 한글일 경우 Kr에서, 영문일 경우 Eg에서 일치하는 데이터 찾기

    // 검색결과 있을 경우 해당 페이지로 이동
    if (searchResult) {
      navigate(``, {});
    } else {
      // 없으면 (searchResult === null) 에러 페이지로 이동
      navigate(`/error`, {});
    }
  };

  return (
    <div className="flex items-center">
      <div className="mr-16 relative flex flex-col h-full flex-[1_1_0]">
        <div className="flex w-full ">
          <div
            ref={inputRef}
            className="inline-flex items-center box-border border border-gray-400 rounded h-10 px-3.5 w-full"
          >
            <form className="w-full" onSubmit={submitKeyword}>
              <input
                className="w-full box-border flex-[1_0_0] inline-block h-full outline-none text-base pr-2"
                placeholder="검색"
                value={keyword}
                maxLength={30}
                onChange={e => setKeyword(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
