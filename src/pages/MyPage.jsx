import React from 'react';
import Avatar from '../components/UI/Avatar';
import MyPageNav from '../components/MyPage/MyPageNav';
import MemberInfo from '../components/MyPage/MemberInfo';
import OrderList from '../components/MyPage/OrderList';
import HostTicketList from '../components/MyPage/HostTicketList';

export default function MyPage() {
  return (
    <div className="relative pb-10 flex-[0_0_auto] block">
      <div className="w-full max-w-[1280px] mx-auto box-border">
        <div className="flex w-full justify-between mx-5 pt-12 pb-28">
          <MyPageNav />
          <HostTicketList />
          <div />
        </div>
      </div>
    </div>
  );
}
