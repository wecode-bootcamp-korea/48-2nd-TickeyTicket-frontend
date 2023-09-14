import React from 'react';
import Avatar from '../UI/Avatar';

export default function MyPageNav() {
  return (
    <div className=" w-56 h-52 block">
      <div>
        <div className="flex items-center mb-10">
          <Avatar
            image="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/1576679084_xRINXxKII.jpeg?gif=1&w=320&h=320&c=c&webp=1"
            size="large"
          />
          <h2 className="text-2xl ml-3">정다인 님</h2>
        </div>
        <div className="block text-base">
          <ul className="w-56 relative">
            <li className="mb-6 cursor-pointer relative">
              <a href="/" className="decoration-transparent">
                회원 정보 수정
              </a>
            </li>
            <li className="mb-6 cursor-pointer relative">
              <a href="/" className="decoration-transparent">
                주문 내역
              </a>
            </li>
            <li className="mb-6 cursor-pointer relative">
              <a href="/" className="decoration-transparent">
                나의 공연 목록
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
