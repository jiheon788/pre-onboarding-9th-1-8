import apiClient from '@/api/apiClient';
import { postSignType } from '@/api/auth/types';

export const postSignUp = async ({ email, password }: postSignType) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signup',
    data: {
      email,
      password,
    },
  });
};

export const postSignIn = async ({ email, password }: postSignType) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signin',
    data: {
      email,
      password,
    },
  });
};
