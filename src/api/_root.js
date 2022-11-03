import {API_BASE_HOST} from '../config';

export const apiAuth = (path = '') => `${API_BASE_HOST}/${path}`;
export const apiUser = (path = '') => `${API_BASE_HOST}/Courier/${path}`;
export const apiDelivery = (path = '') => `${API_BASE_HOST}/Delivery/${path}`;
export const apiSetting = (path = '') => `${API_BASE_HOST}/Setting/${path}`;
export const apiResetPassword = (path = '') => `${API_BASE_HOST}/User/${path}`;
export const apiResetPin = (path = '') => `${API_BASE_HOST}/Pin/${path}`;
