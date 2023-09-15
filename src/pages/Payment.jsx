import React from 'react';
import { useNavigate } from 'react-router-dom';
import PayHeader from '../components/Payment/PayHeader';
import ShowInfo from '../components/Payment/ShowInfo';
import PaySubmit from '../components/Payment/PaySubmit';

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="payment container relative p-10 mt-10 mb-10 w-[1000px] h-[580px] border border-gray">
      <PayHeader />
      <div className="flex justify-ceneter h-[440px]">
        <ShowInfo />
        <PaySubmit />
      </div>
    </div>
  );
};

export default Payment;
