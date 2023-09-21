import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getToken, setGetToken] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const changeEmail = event => {
    setEmail(event.target.value);
  };

  const changePassword = event => {
    setPassword(event.target.value);
  };

  const submitLogin = event => {
    event.preventDefault();
    axios
      .post('http://10.58.52.58:3000/user-router/signin', {
        email: email,
        password: password,
      })
      .then(res => res)
      .then(data => {
        if (data) {
          alert('로그인이 완료 되었습니다.');
          localStorage.setItem('token', data.data.accessToken);
          navigate('/');
        }
      })
      .catch(err => {
        if (err.message.includes('INVALID_USER')) {
          alert(
            '회원을 찾을 수 없습니다. 아이디 및 비밀번호를 확인해주시고 회원가입을 하지 않았다면 회원가입을 먼저 진행해 주세요.',
          );
          navigate('/');
        }
      });
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
        <button className="my-5 w-full py-[14px] px-3 text-base h-min-[50px] bg-brand border-brand text-white rounded">
          로그인
        </button>
        <section className="w-full text-center block">
          <a href="/signup">회원가입</a>
        </section>
      </form>
    </>
  );
}
