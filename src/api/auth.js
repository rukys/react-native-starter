import {fetchApi} from './_fetch';
import {apiAuth} from './_root';

export const login = data =>
  fetchApi({
    url: apiAuth('Login'),
    method: 'POST',
    data,
  });

export const tokenRefresh = (oldToken, params) =>
  fetchApi({
    url: apiAuth(`Token/refresh/${params}`),
    method: 'POST',
    oldToken,
  });
