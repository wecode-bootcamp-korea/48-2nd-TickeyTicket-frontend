import React, { useState } from 'react';

const options = [
  '선택해주세요',
  'naver.com',
  'daum.net',
  'gmail.com',
  'hanmail.net',
  '직접 입력',
];

export default function PostFormSection() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = e => {};

  const handleSubmit = e => {};

  return (
    <form className="flex flex-col px-12" onSubmit={handleSubmit}>
      <div className="my-5">
        <div className="block pb-3 text-base">
          어떤 공연을 만들고 싶으신가요?
        </div>
        <div className="mt-2">
          <select className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400">
            {options.map((option, index) => (
              <option
                value={product.category ?? ''}
                required
                onChange={handleChange}
                key={index}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="my-5">
        <div className="block pb-3 text-base">공연명을 입력해주세요.</div>
        <input
          className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
          type="text"
          name="title"
          value={product.title ?? ''}
          placeholder="공연명"
          required
          onChange={handleChange}
        />
      </div>
      <div className="my-5">
        <div className="block pb-3 text-base">공연 장소를 선택해주세요.</div>
        <div className="">
          <input
            className="text-[15px] rounded box-border block h-10 w-full px-[15px] leading-10 border border-zinc-400"
            type="text"
            name="title"
            value={product.title ?? ''}
            placeholder="공연명"
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-[50px]">
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
