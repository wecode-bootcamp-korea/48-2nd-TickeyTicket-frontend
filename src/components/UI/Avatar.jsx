import React from 'react';

export default function Avatar({ image, size = 'large' }) {
  return (
    <div className={getContainerStyle(size)}>
      <img
        className={`bg-white object-cover rounded-full 
        ${getImageSizeStyle(size).image}`}
        alt="user profile"
        src={image ?? `../../assets/userImage.png`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size) {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const { container } = getImageSizeStyle(size);
  return `${baseStyle} ${container}`;
}

function getImageSizeStyle(size) {
  switch (size) {
    case 'small':
      return {
        container: 'w-9 h-9',
        image: 'w-[34px] h-[34px] p-[0.1rem]',
      };
    case 'medium':
      return {
        container: 'w-11 h-11',
        image: 'w-[42px] h-[42px] p-[0.1rem]',
      };
    case 'large':
      return {
        container: 'w-[68px] h-[68px]',
        image: 'w-16 h-16 p-[0.2rem]',
      };
    case 'xlarge':
      return {
        container: 'w-[142px] h-[142px]',
        image: 'w-[138px] h-[138px] p-[0.3rem]',
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
