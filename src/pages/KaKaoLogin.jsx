import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function KaKaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const AUTHORIZE_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=927a7d4eca2803289b8c12dca02ed12d&redirect_uri=http://localhost:3000/kakaologin&code=${AUTHORIZE_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          console.log(data.access_token);
        } else {
          navigate('/');
        }
      });
  };

  const postKakaoToken = () => {
    axios.post('http://127.0.0.1:3000/kakao-router/kakaologin', {
      kakaoAccessToken: localStorage.getItem('token'),
    });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
    postKakaoToken();
  }, []);

  return <div>로딩중...</div>;
}
