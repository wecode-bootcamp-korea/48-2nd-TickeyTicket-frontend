import React from 'react';

export default function SocialLogin() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=927a7d4eca2803289b8c12dca02ed12d&redirect_uri=http://localhost:3000/kakaologin`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="my-8 pb-8 border-b">
      <div className="text-xs text-center my-4 text-zinc-500">
        SNS계정으로 간편하게 로그인/회원가입
      </div>
      <button className="flex justify-center" onClick={handleLogin}>
        카카오로 로그인
      </button>
    </div>
  );
}
