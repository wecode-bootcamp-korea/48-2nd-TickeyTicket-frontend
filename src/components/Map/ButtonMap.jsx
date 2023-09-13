import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ButtonMap = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="buttonMap fixed bottom-[40px] left-2/4 -translate-x-1/2 w-32 h-10 rounded-[20px] bg-brand text-white text-base leading-10 z-10"
      onClick={() => {
        navigate('/map');
      }}
    >
      내주변
      <FaMapMarkedAlt className="mt-[-6px] ml-3 text-xl inline-block" />
    </button>
  );
};

export default ButtonMap;
