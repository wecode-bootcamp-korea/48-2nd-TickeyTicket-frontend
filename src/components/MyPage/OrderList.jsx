import React, { useState } from 'react';
import ReviewModal from './ReviewModal';

export default function OrderList() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenPost = () => {
    setOpenModal(true);
  };

  return (
    <div className=" w-[900px] relative block">
      <h1 className="text-3xl">주문 내역</h1>
      <div className="mt-10">
        <table className=" border-t-[1px] w-full border-collapse table-fixed">
          <colgroup>
            <col className="w-5/12" />
            <col className="w-2/12" />
            <col className="w-2/12" />
            <col className="w-3/12" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className="h-[52px] boder-b-[1px] text-base">
                주문정보
              </th>
              <th scope="col">주문금액(수량)</th>
              <th scope="col">공연일자</th>
              <th scope="col" colSpan={2}>
                주문 상태
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y-[1px]">
              <td className="h-[70px] p-[10px] box-border borer-b-[1px] text-center align-middle">
                <div className="my-[10px] table table-fixed w-full min-h-[96px] text-sm text-left relative">
                  <a
                    href="/"
                    className="table-cell w-20 pt-24 align-middle relative overflow-hidden"
                  >
                    <img
                      src="https://image.msscdn.net/images/goods_img/20230316/3155154/3155154_16789623683032_100.jpg"
                      alt="이미지"
                      className=" w-[80px] h-[90px] bg-cover object-cover absolute left-0 top-[0]"
                    />
                  </a>
                  <ul className="w-full table-cell pl-3 align-middle">
                    <li className="block overflow-hidden text-sm">뮤지컬</li>
                    <li className="max-h-11 font-bold overflow-hidden text-sm">
                      <a href="/" alt="공연 이미지">
                        서울대공원
                      </a>
                    </li>
                    <li className="max-h-11 font-bold overflow-hidden text-sm">
                      <a href="/" alt="공연 이미지">
                        핫한 공연
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
              <td className="h-[70p] p-[10px] box-border text-center align-middle">
                2023.09.23
              </td>
              <td className="h-[70p] p-[10px] box-border text-center align-middle">
                2023.09.23
              </td>
              <td className="h-[70p] p-[10px] box-border text-center align-middle">
                202
              </td>
              <td className="h-[70p] p-[10px] box-border text-center align-middle">
                <div className="relative">
                  <button
                    className="w-24 mt-1 my-auto"
                    onClick={handleOpenPost}
                  >
                    후기작성
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {openModal && <ReviewModal onClose={() => setOpenModal(false)} />}
      </div>
    </div>
  );
}
