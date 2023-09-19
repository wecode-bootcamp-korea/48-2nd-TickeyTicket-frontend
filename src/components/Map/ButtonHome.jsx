import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ButtonHome = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="buttonHome absolute bottom-[40px] left-2/4 -translate-x-1/2 w-32 h-10 rounded-[20px] bg-brand text-white text-base leading-10 z-10"
      onClick={() => {
        navigate('/');
      }}
    >
      홈
      <AiFillHome className="mt-[-6px] ml-3 text-xl inline-block" />
    </button>
  );
};

export default ButtonHome;
