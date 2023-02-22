import React from 'react';
import { useState, useEffect } from 'react';
import { instance } from '../api/instance';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [pwValidationState, setPwValidationState] = useState(false);
  const [emailValidationState, setEmailValidationState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    instance
      .post('/auth/signin', userInfo)
      .then((res) => {
        if (res.status !== 200) return alert('로그인에 실패했습니다.');
        localStorage.setItem('token', res.data.access_token);
        navigate('/todo');
      })
      .catch(() => {
        return alert('로그인에 실패했습니다.');
      });
  };

  const emailValidation = (e) => {
    let email = e.target.value;
    setUserInfo({ ...userInfo, email: email });
    if ([...email].includes('@') && email !== '') {
      setEmailValidationState(true);
    } else {
      setEmailValidationState(false);
    }
  };

  const pwValidation = (e) => {
    let pw = e.target.value;
    setUserInfo({ ...userInfo, password: pw });
    if (pw.length >= 8) {
      setPwValidationState(true);
    } else {
      setPwValidationState(false);
    }
  };

  useEffect(() => {
    const hasToken = localStorage.getItem('token');
    if (hasToken) return;
    // navigate('/todo');
  }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Signin</div>
        <input
          data-testid='email-input'
          type='email'
          placeholder='Email'
          onChange={emailValidation}
        />
        {emailValidationState || <p>이메일은 @를 포함해야 합니다.</p>}
        <input
          data-testid='password-input'
          type='password'
          placeholder='Password'
          onChange={pwValidation}
        />
        {pwValidationState || <p>비밀번호는 8자 이상입니다.</p>}
        <button data-testid='signin-button' disabled={!(pwValidationState && emailValidationState)}>
          Submit
        </button>
      </form>
      <div>
        <p>회원이 아닙니까?</p>
        <button
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Signin;