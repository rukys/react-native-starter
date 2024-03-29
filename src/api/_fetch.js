import axios from 'axios';
import {authStore} from '../store';
// import {API_TIMEOUT} from '../config';

const API_TIMEOUT = 2000;

export const fetchApi = async ({
  url,
  path,
  method = 'GET',
  data,
  params,
  headers,
  isExternalResource,
  ...rest
}) => {
  const {token} = authStore.getState();
  // const {token_refresh} = authStore.getState();

  const finalHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  console.info(
    `%c[${method}]%c ${url || `${path}`}`,
    'background: cornflowerblue; color: white; padding: 0 2px;',
    'color: cornflowerblue;',
    {params, data, headers: finalHeaders},
  );

  const response = await axios({
    timeout: API_TIMEOUT,
    url: url || path,
    method,
    data,
    params,
    headers: finalHeaders,
    ...rest,
  });

  console.log(
    `%c[${response.status}]%c[${method}]%c ${url || `${path}`}`,
    'background: green; color: white; padding: 0 2px;',
    'background: black; color: white; padding: 0 2px;',
    'color: green;',
    response.data,
  );

  return response.data;
};
