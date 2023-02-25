import { useState, useEffect } from 'react';
import { isValidEmail, isValidPassword } from '../utils/validation';

interface ISignForm {
  email: string;
  password: string;
}

const useValidation = (target: ISignForm) => {
  const [emailStatus, setEmailStatus] = useState('');
  const [passwordStatus, setPasswordStatus] = useState('');

  useEffect(() => {
    isValidEmail(target.email)
      ? setEmailStatus('')
      : setEmailStatus('이메일에는 @가 포함되어야 합니다.');

    isValidPassword(target.password)
      ? setPasswordStatus('')
      : setPasswordStatus('패스워드는 8자 이상이어야 합니다.');
  }, [target]);

  return [emailStatus, passwordStatus];
};

export default useValidation;
