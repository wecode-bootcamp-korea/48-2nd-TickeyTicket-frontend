import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFormPrevious } from 'react-icons/gr';
import './PayHeader.css';

const PayHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="payHeader">
      <p className="pl-3 py-2 mb-4 text-lg bg-black text-white">
        <button
          type="button"
          className="prev relative flex-1 pr-4 mr-4"
          onClick={() => {
            navigate(-1);
          }}
        >
          <GrFormPrevious className="inline-block text-xl" />
          이전
        </button>
        결제하기
      </p>
    </div>
  );
};

export default PayHeader;
