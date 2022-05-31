import { AUTH_KEY } from './constants';

import { getCookie, deleteCookie } from './cookie-helper';
import { env } from '../env';
export const HAS_DRILLDOWNS = env.DEEPDRILLS_ENABLED || '';

export const isAuthenticated = () => {
  const userToken = getUserToken();
  if (!Object.keys(userToken).length) {
    return false;
  }
  return true;
};

export const getAccess = () => {
  const access = getCookie('access');
  if (!access) {
    return false;
  }
  return true;
};

export const getUserToken = () => getCookie('token');

export const signOut = () => {
  deleteCookie(AUTH_KEY);
  deleteCookie('user');
  deleteCookie('refreshtoken');
  window.location.replace('/login');
};

export const forceLogout = () => {
  deleteCookie('token');
  deleteCookie('refreshtoken');
  deleteCookie('user');
  window.location.replace('/login');
};
