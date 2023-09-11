import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import InputBox from '../SignUp/InputBox';

export default function SignUpForm() {
  const auth = useAuth();
  const navigate = useNavigate();
  const name = auth.name;
  const nickname = auth.nickname;
  const password = auth.password;

  const submitSignUp = event => {
    event.preventDefault();

    // 이름 유효성 검사 확인
    if (!auth.checkNameValidation()) return;

    // 닉네임 유효성 검사 확인
    if (!auth.checkNicknameVaildation()) return;

    // 전화번호 유효성 검사 확인
    if (!auth.checkNumberValidation()) return;

    // 이메일 유효성 검사 확인
    if (!auth.checkEmailValidation()) return;

    // 비밀번호 유효성 검사 확인
    if (!auth.checkPasswordValidation()) return;

    // 비밀번호 일치여부 확인
    if (!auth.checkValidationForSignUp()) return;

    // 로그인 인증상태를 브라우저 세션 동안 유지하도록 하고 성공 시 넘어감
    //   .then(() =>
    //     유저의 이메일와 패스워드를 저장하여 사용자 계정 생성( auth.email, auth.password),
    //   )
    //   .then(() => {
    //     alert(
    //       '회원가입이 완료 되었습니다.',
    //     );
    //     auth.setEmail('');
    //     auth.setPassword('');
    //     auth.setConfirmPassword('');
    //     // 사용자가 입력하고 나면 입력한 데이터를 초기화 하여 보안상의 이유로 민감한 정보를 계속 메모리에 보관하지 않도록 함

    //     navigate('/');
    //   })
    //   .catch(err => {
    //     if (err.message.includes('already-in-use')) {
    //       alert('이미 가입된 계정입니다.');
    //       auth.setEmail('');
    //       auth.setPassword('');
    //       auth.setConfirmPassword('');
    //     }
    //   });
  };

  return (
    <section className="pt-10 w-[calc(100%-30px)] m-auto">
      <a href="/">메인으로 가기</a>
      <div className="w-96 mx-auto pt-16 pb-14">
        <h1 className="text-xl font-bold">회원가입</h1>
        <SocialLogin />
        <form onSubmit={submitSignUp}>
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
          <InputBox
            title="비밀번호"
            description=" 대소문자, 숫자, 특수기호를 포함한 8자 이상의 비밀번호를 입력해주세요."
            typeText="password"
            placeholderText="비밀번호"
            valueText={auth.password}
            onChangeFunction={event => {
              auth.changePassword(event);
              auth.checkPasswordValidation();
            }}
            valueRefText={auth.passwordRef}
            authText={password}
            ErrorText={auth.passwordError}
          />
          <div className="mb-8">
            <label className="block mb-3 text-base font-bold natural-800">
              비밀번호 확인
            </label>
            <label>
              <input
                className="py-2 px-4 inline-block w-full box-border text-sm border border-gray-300 rounded"
                type="text"
                placeholder="비밀번호 확인"
                id="passwordConfirm"
                value={auth.confirmPassword}
                onChange={auth.changeConfirmPassword}
                valueRef={auth.confirmPasswordRef}
              />
            </label>
          </div>
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
            회원가입하기
          </button>
        </form>
        <p className="text-center mt-8">
          이미 아이디가 있으신가요?
          <a href="/" className="pl-2.5">
            로그인
          </a>
        </p>
      </div>
    </section>
  );
}
