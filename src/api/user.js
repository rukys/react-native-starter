import {fetchApi} from '../utils/fetch';
import {apiUser} from './_root';

export const initial = ({queryKey}) => {
  const [, {username}] = queryKey;
  return fetchApi({
    url: apiUser(`initial/${username}`),
  });
};

export const locationCourier = ({queryKey}) => {
  const [, {id}] = queryKey;
  return fetchApi({
    url: apiUser(`location/${id}`),
  });
};

export const deliveryPriority = ({queryKey}) => {
  const [, {id}] = queryKey;
  return fetchApi({
    url: apiUser(`GetWaybillTiketCourier/${id}`),
  });
};
