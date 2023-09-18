import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = el => {
    navigate(el.url);
    setActiveTab(el.id);
  };
  const navigate = useNavigate();

  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;

  return (
    <div className="relative z-30 border-b">
      <div className="max-w-[1256px] py-2.5 mx-auto relative flex items-center content-between">
        <div className="flex-[1_0_0] flex content-between overflow-hidden">
          <nav className=" overflow-hidden flex items-stretch my-[-5px] h-[51px]">
            <ul className=" mx-[5px] block">
              {NAV_BAR.map(el => {
                const isActive = el.id === activeTab;

                const textColor = isActive ? 'text-brand' : '';
                return (
                  <li
                    key={el.id}
                    className={`relative inline-flex flex-col content-center text-center box-border pt-5 px-[15px] font-bold cursor-pointer outline-none ${textColor}`}
                    onClick={() => {
                      handleClick(el);
                    }}
                  >
                    {el.tabName}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

const NAV_BAR = [
  {
    id: 1,
    tabName: '홈',
    url: '/',
  },
  {
    id: 2,
    tabName: '전체',
    url: '/main',
  },
  {
    id: 3,
    tabName: '뮤지컬',
    url: '/main?genreId=1',
  },
  {
    id: 4,
    tabName: '연극',
    url: '/main?genreId=2',
  },
  {
    id: 5,
    tabName: '클래식',
    url: '/main?genreId=3',
  },
  {
    id: 6,
    tabName: '무용',
    url: '/main?genreId=4',
  },
  {
    id: 7,
    tabName: '전시',
    url: '/main?genreId=5',
  },
  {
    id: 8,
    tabName: '행사',
    url: '/main?genreId=6',
  },
  {
    id: 9,
    tabName: '음악',
    url: '/main?genreId=7',
  },
  {
    id: 10,
    tabName: '코미디',
    url: '/main?genreId=8',
  },
  {
    id: 11,
    tabName: '버스킹',
    url: '/main?genreId=9',
  },
];
