import React from 'react';

export default function Nav() {
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;

  return (
    <div className="relative z-30 border-b">
      <div className="max-w-[1256px] py-2.5 mx-auto relative flex items-center content-between">
        <div className="flex-[1_0_0] flex content-between overflow-hidden">
          <nav className=" overflow-hidden flex items-stretch my-[-5px] h-[51px]">
            <span className=" mx-[5px] block">
              <a
                href="/"
                className=" relative inline-flex flex-col content-center text-center box-border py-3 px-[6px] outline-none"
              >
                홈
              </a>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
