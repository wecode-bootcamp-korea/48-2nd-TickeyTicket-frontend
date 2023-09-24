import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PaySubmit.css';

const PaySubmit = ({ nickName, data }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [paymentInfo, setPaymentInfo] = useState({
    next_redirect_pc_url: '',
    tid: '',

    params: {
      cid: 'TC0ONETIME',
      partner_order_id: 'partner_order_id',
      partner_user_id: 'partner_user_id',
      //item_name: `${data.name}`,
      item_name: 'a',
      quantity: 1,
      //total_amount: `${data.totalPrice}`,
      total_amount: 10000,
      vat_amount: 0,
      tax_free_amount: 0,
      approval_url: 'http://localhost:3000/mypage',
      fail_url: 'http://localhost:3000/payment',
      cancel_url: 'http://localhost:3000/payment',
    },
  });

  const handleKakaoPayClick = () => {
    // if (data && data.name && data.totalPrice) {
    window.location.href = paymentInfo.next_redirect_pc_url;
    // } else {
    //   alert('Product information is missing.');
    // }
  };

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        const response = await axios.post(
          '/v1/payment/ready',
          paymentInfo.params,
          {
            headers: {
              Authorization: 'KakaoAK d6f23398a3038d3d92691d5fd5a8e620',
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        );
        const { next_redirect_pc_url, tid } = response.data;

        setPaymentInfo(prevPaymentInfo => ({
          ...prevPaymentInfo,
          next_redirect_pc_url,
          tid,
        }));
      } catch (error) {
        console.error('Axios Error:', error);
      }
    };

    fetchPaymentInfo();
  }, []);

  useEffect(() => {
    setIsActive(phoneNumber.length === 11 && isRadioSelected);
  }, [phoneNumber, isRadioSelected]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (
      !phoneNumber.trim() ||
      !/^\d+$/.test(phoneNumber) ||
      phoneNumber.length !== 11
    ) {
      alert('올바른 전화번호를 입력하세요.');
      return;
    }

    try {
      const serverUrl = 'http://10.58.52.58:3000/payment/handle-payment';
      const response = await axios.post(serverUrl, {
        paymentInfo,
        statusCode: '200',
      });
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('서버 요청 오류:', error);
    }
  };

  const changePhoneNumber = event => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div className="paySubmit flex flex-col justify-between flex-1 pl-7 p-5 pt-0">
      <div>
        <p className="text-base mb-2">예매자 정보</p>
        <div>
          <div className="flex flex-row items-center border">
            <div className="inputTitle w-[15%] p-3 font-bold bg-zinc-50">
              <span>이름</span>
            </div>
            <div className="w-[20%] p-3">
              <span>{nickName}</span>
            </div>
            <div className="inputTitle w-[20%] p-3 font-bold bg-zinc-50">
              <span>휴대폰 번호</span>
            </div>
            <div className="w-[45%] p-2">
              <form onSubmit={handleSubmit}>
                <input
                  id="phoneNumber"
                  labeltext="전화번호"
                  className="w-[78%] p-1 border border-zinc-300 text-[12px]"
                  placeholder="전화번호를 입력하세요"
                  value={phoneNumber}
                  type="text"
                  onChange={changePhoneNumber}
                />
                <button
                  type="submit"
                  className="submitBtn ml-2 py-1 px-2 bg-black text-white text-[12px]"
                >
                  확인
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base mb-2">수령방법</p>
        <div className="w-[90px] py-2 border-2 border-zinc-300 text-center text-[14px]">
          모바일 QR
        </div>
        <p className="mt-3 text-sm text-darkgray">
          * 티켓은 관람일 당일 현장에서 qr, 예매번호, 전화번호 및 본인 확인 후
          수령 할 수 있습니다.
          <br />
          * 취소기한 : 공연일 하루 전까지
          <br />* 취소수수료 : 티켓금액의 0~30%
          <span className="text-gray-700 underline ml-2 cursor-pointer">
            [상세보기]
          </span>
        </p>
        <label>
          <input
            type="radio"
            name="agreement"
            value="agreement"
            onChange={() => setIsRadioSelected(true)}
          />
          <span>취소기한 및 취소수수료 동의</span>
        </label>
      </div>
      <div className="buttonWrap">
        <p className="text-base mb-2">카카오페이로 결제하기</p>
        <button
          className="kakaoPay w-[200px]"
          onClick={handleKakaoPayClick}
          disabled={!isActive}
        >
          <img src="/assets/icon_payment.png" alt="카카오페이" />
        </button>
      </div>
    </div>
  );
};

export default PaySubmit;
