import React from 'react';
import useAuth from '../../hooks/useAuth';
import InputBox from '../SignUp/InputBox';

export default function MemberInfo() {
  const auth = useAuth();
  const name = auth.name;
  const nickname = auth.nickname;
  const password = auth.password;

  const handleSubmitInfo = e => {
    e.preventDefault();
  };

  return (
    <div className=" w-[900px] relative block">
      <h1 className="text-3xl">회원정보 수정</h1>
      <section className="mt-6 py-16 px-40 bg-gray-100 rounded">
        <form onSubmit={handleSubmitInfo}>
          <InputBox
            title="이름"
            description="실명을 입력해주세요."
            typeText="text"
            placeholderText="실명 (2~5자)"
            valueText={auth.name}
            onChangeFunction={event => {
              auth.changeName(event);
              auth.checkNameValidation(event.target.value);
            }}
            valueRefText={auth.nameRef}
            authText={name}
            ErrorText={auth.nameError}
          />
          <InputBox
            title="닉네임"
            description="다른 유저와 겹치지 않도록 입력해주세요. (2~8자)"
            typeText="text"
            placeholderText="닉네임 (2~8자)"
            valueText={auth.nickname}
            onChangeFunction={event => {
              auth.changeNickname(event);
              auth.checkNicknameVaildation();
            }}
            valueRefText={auth.nicknameRef}
            authText={nickname}
            ErrorText={auth.nicknameError}
          />
          <div className="">
            <label className="block mb-3 text-base font-bold natural-800">
              휴대전화
            </label>
            <label>
              <input
                className="py-2 px-4 inline-block w-full box-border text-sm border border-gray-300 rounded"
                type="text"
                placeholder="숫자만 입력해주세요"
                id="number"
                value={auth.number}
                onChange={auth.changeNumber}
                valueRef={auth.confirmPasswordRef}
              />
            </label>
          </div>
          <div className="mt-1 mb-8">
            <button className="mt-2.5 w-full h-12 bg-gray-100 font-bold box-border text-sm border border-gray-300 rounded text-zinc-400">
              휴대전화 인증하기
            </button>
          </div>
          <div className="">
            <label className="block mb-3 text-base font-bold natural-800">
              이메일
            </label>
            <div>
              <div className="flex">
                <span className="relative flex-1">
                  <label>
                    <input
                      className="py-2 px-4 block w-full box-border text-sm border border-gray-300 rounded"
                      type="text"
                      placeholder="이메일"
                      id="email"
                      value={auth.emailFirst}
                      onChange={auth.changeNumber}
                      valueRef={auth.confirmPasswordRef}
                    />
                  </label>
                </span>
                <span className="flex-[0_0_6%] leading-9 text-center text-neutral-300">
                  @
                </span>
                <span className="relative flex-1">
                  <label>
                    <input
                      className="py-2 px-4 block w-full box-border text-sm border border-gray-300 rounded"
                      type="text"
                      placeholder="이메일"
                      id="email"
                      value={auth.emailFirst}
                      onChange={auth.changeNumber}
                      valueRef={auth.confirmPasswordRef}
                    />
                  </label>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-1 mb-8">
            <button className="mt-2.5 w-full h-12 bg-gray-100 font-bold box-border text-sm border border-gray-300 rounded text-zinc-400">
              이메일 인증하기
            </button>
          </div>
          <button className="w-full mt-8 bg-brand border-brand text-white py-3 rounded cursor-pointer">
            회원정보 수정하기
          </button>
        </form>
      </section>
    </div>
  );
}
