import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ButtonMap = () => {
  const navigate = useNavigate();
  return (
    <div
      className="buttonMap fixed top-0 w-full h-[100vh]"
      onClick={() => {
        navigate('/map');
      }}
    >
      <button
        type="button"
        className="absolute bottom-[40px] left-2/4 -translate-x-1/2 w-32 h-10 rounded-[20px] bg-brand text-white text-base leading-10"
      >
        내주변
        <FaMapMarkedAlt className="mt-[-6px] ml-3 text-xl inline-block" />
      </button>
    </div>
  );
};

export default ButtonMap;
