import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import SocialLogin from '../components/Auth/SocialLogin';

export default function Login() {
  return (
    <div className="h-full block">
      <main className="flex flex-col items-center content-center min-h-full relative box-border">
        <div className="flex w-full grow">
          <div className="flex-[1_0_auto] mx-auto max-w-[300px] flex content-center items-center flex-col box-border py-10">
            <LoginForm />
            <SocialLogin />
          </div>
        </div>
      </main>
    </div>
  );
}
