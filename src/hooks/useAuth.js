import { useCallback, useRef, useState } from 'react';
import {
  emailFirstRegex,
  emailLastRegex,
  nameRegex,
  nicknameRegex,
  numRegex,
  passwordRegex,
} from '../common/util';

const useAuth = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [number, setNumber] = useState('');
  const [emailFirst, setEmailFirst] = useState('');
  const [emailLast, setEmailLast] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // 에러 state 대신 값 자체로 만들기
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [numberError, setNumberError] = useState('');
  //
  const nicknameRef = useRef(null);
  const numberRef = useRef(null);
  const nameRef = useRef(null);
  const emailFirstRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // 실명 입력받는 함수
  const changeName = event => {
    setName(event.target.value);
  };

  // 닉네임 입력받는 함수
  const changeNickname = event => {
    setNickname(event.target.value);
  };

  // 전화번호 입력받는 함수
  const changeNumber = event => {
    setNumber(event.target.value);
  };

  // 이메일 앞부분 입력받는 함수
  const changeFirstEmail = event => {
    setEmailFirst(event.target.value);
  };

  // 이메일 도메인 입력받는 함수
  const changeLastEmail = event => {
    setEmailLast(event.target.value);
  };

  // 비밀번호 입력받는 함수
  const changePassword = event => {
    setPassword(event.target.value);
  };

  // 비밀번호 다시 입력하는 함수
  const changeConfirmPassword = event => {
    setConfirmPassword(event.target.value);
  };

  // 닉네임 유효성 검사하는 함수
  const checkNicknameVaildation = useCallback(() => {
    const checkNicknameVaildation = nickname.match(nicknameRegex);

    if (!nickname || !checkNicknameVaildation) {
      if (!nickname) {
        setNicknameError('닉네임을 입력해주세요.');
        numberRef?.current?.focus();
        return false;
      } else {
        setNicknameError(
          '닉네임은 2~8자이며 숫자, 영어, 한글을 포함할 수 있습니다.',
        );
        numberRef?.current?.focus();
        return false;
      }
    } else {
      // 유효성 검사 통과 시 오류 메시지를 빈 문자열로 설정
      setNicknameError('');
    }
    return true;
  }, [nickname]);

  // 전화번호 유효성 검사하는 함수
  const checkNumberValidation = () => {
    const checkNumberValidation = number.match(numRegex);

    if (!number || !checkNumberValidation) {
      if (!number) {
        setNumberError('전화번호를 입력해주세요.');
        numberRef?.current?.focus();
        return false;
      } else {
        setNumberError('전화번호를 형식에 맞게 입력해주세요.');
        numberRef?.current?.focus();
        return false;
      }
    }
    return true;
  };

  // 이름 유효성 검사하는 함수
  const checkNameValidation = name => {
    const checkNameValidation = name.match(nameRegex);

    if (!name || !checkNameValidation || name.length > 5) {
      if (!name) {
        setNameError('실명을 입력해주세요.');
        nameRef?.current?.focus();
        return false;
      } else {
        setNameError('실명을 형식에 맞게 입력해주세요.');
        nameRef?.current?.focus();
        return false;
      }
    } else {
      // 유효성 검사 통과 시 오류 메시지를 빈 문자열로 설정
      setNameError('');
    }
    return true;
  };

  console.log(name, nameError);

  // 이메일 유효성 검사하는 함수
  const checkEmailValidation = () => {
    const checkEmailFirstValidation = emailFirst.match(emailFirstRegex);
    const checkEmailLastValidation = emailLast.match(emailLastRegex);

    if (
      !emailFirst ||
      !emailLast ||
      !checkEmailFirstValidation ||
      checkEmailLastValidation
    ) {
      if (!emailFirst || !emailLast) {
        setEmailError('이메일을 입력해주세요.');
        emailFirstRef?.current?.focus();
        return false;
      } else {
        setEmailError('이메일 형식을 맞게 입력해주세요.');
        emailFirstRef?.current?.focus();
        return false;
      }
    } else {
      // 유효성 검사 통과 시 오류 메시지를 빈 문자열로 설정
      setNameError('');
    }
    return true;
  };

  // 비밀번호 유효성 검사 함수
  const checkPasswordValidation = useCallback(() => {
    const checkPasswordValidation = password.match(passwordRegex);
    if (!password || !checkPasswordValidation) {
      if (!password) {
        setPasswordError('비밀번호를 입력해주세요.');
        passwordRef?.current?.focus();
        return false;
      } else {
        setPasswordError(
          '비밀번호는 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.',
        );
        passwordRef?.current?.focus();
        return false;
      }
    } else {
      // 유효성 검사 통과 시 오류 메시지를 빈 문자열로 설정
      setPasswordError('');
    }
    return true;
  }, [password]);

  // 비밀번호 일치여부 확인하는 함수
  const checkValidationForSignUp = () => {
    if (!confirmPassword) {
      setPasswordError('비밀번호를 다시 한번 더 입력해주세요.');
      return false;
    }

    if (password !== confirmPassword) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      setConfirmPassword('');
      return false;
    }
    return true;
  };

  return {
    name,
    setName,
    nickname,
    setNickname,
    number,
    setNumber,
    emailFirst,
    setEmailFirst,
    emailLast,
    setEmailLast,
    password,
    setPassword,
    numberError,
    setNumberError,
    nameError,
    setNameError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    nicknameError,
    setNicknameError,
    confirmPassword,
    setConfirmPassword,
    nameRef,
    numberRef,
    emailFirstRef,
    passwordRef,
    confirmPasswordRef,
    nicknameRef,
    changeName,
    changeNickname,
    changeNumber,
    changeFirstEmail,
    changeLastEmail,
    changePassword,
    changeConfirmPassword,
    checkNameValidation,
    checkEmailValidation,
    checkPasswordValidation,
    checkValidationForSignUp,
    checkNumberValidation,
    checkNicknameVaildation,
  };
};

export default useAuth;
