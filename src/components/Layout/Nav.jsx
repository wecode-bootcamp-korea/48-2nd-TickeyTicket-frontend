import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_BAR } from '../../utils/constants';

export default function Nav() {
  const navigate = useNavigate();
  const handleClick = el => {
    navigate(el.url);
  };

  const { pathname, search } = useLocation();

  const currentPath = pathname + search;

  if (pathname === '/login') return null;
  if (pathname === '/signup') return null;

  return (
    <div className="relative z-30 border-b">
      <div className="max-w-[1256px] py-2.5 mx-auto relative flex items-center content-between">
        <div className="flex-[1_0_0] flex content-between overflow-hidden">
          <nav className=" overflow-hidden flex items-stretch my-[-5px] h-[51px]">
            <ul className=" mx-[5px] block">
              {NAV_BAR.map(el => {
                const isActive = el.url === currentPath;

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
