import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  // 이메일 입력받는 함수
  const changeEmail = event => {
    setEmail(event.target.value);
  };

  // 비밀번호 입력받는 함수
  const changePassword = event => {
    setPassword(event.target.value);
  };

  const submitLogin = event => {
    event.preventDefault();

    // // setPersistence => 로그인 시 세션스토리지에 유저 정보 저장
    // setPersistence(authService, browserSessionPersistence)
    //   .then(() =>
    //     signInWithEmailAndPassword(authService, auth.email, auth.password),
    //   )
    //   .then(() => {
    //     auth.setEmail('');
    //     auth.setPassword('');

    //     if (state) {
    //       navigate(state);
    //     } else {
    //       navigate('/', { replace: true });
    //     }
    //   })
    //   .catch(err => {
    //     if (err.message.includes('user-not-found')) {
    //       alert('회원을 찾을 수 없습니다. 회원가입을 먼저 진행해 주세요.');
    //       navigate('/signup', { state });
    //     }

    //     if (err.message.includes('wrong-password')) {
    //       alert('잘못된 비밀번호 입니다.');
    //       auth.setPassword('');
    //     }
    //   });
  };

  return (
    <>
      <a className="mb-4 cursor-pointer" href="/">
        <div className="bg-logo h-[120px] w-[120px] bg-cover" />
      </a>
      <form className="w-[300px] block" onSubmit={submitLogin}>
        <div className="relative block mb-3">
          <input
            id="email"
            labelText="이메일"
            className="relative block w-full rounded p-3 border border-zinc-300"
            placeholder="이메일"
            value={email}
            onChange={changeEmail}
            valueRef={emailRef}
          />
        </div>
        <div className="relative block">
          <input
            id="password"
            labelText="비밀번호"
            className="relative block w-full rounded p-3 border border-zinc-300"
            placeholder="비밀번호"
            value={password}
            onChange={changePassword}
            valueRef={passwordRef}
            type="password"
          />
        </div>
        <button className="my-5 w-full py-[14px] px-3 text-base h-min-[50px] bg-pink-600 border-pink-600 text-white rounded">
          로그인
        </button>
        <section className="w-full text-center block">
          <a href="/signup">회원가입</a>
        </section>
      </form>
    </>
  );
}
