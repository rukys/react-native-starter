import {fetchApi} from './_fetch';
import {apiDelivery} from './_root';

export const delivery = ({queryKey}) => {
  const [, {id}] = queryKey;
  return fetchApi({
    url: apiDelivery(`${id}`),
  });
};

export const deliveryUpdate = ({queryKey}) => {
  const [, {waybill}] = queryKey;
  return fetchApi({
    url: apiDelivery(`Update/${waybill}`),
    method: 'PUT',
  });
};

export const deliveryUpdateHistory = ({queryKey}) => {
  const [, {waybill}] = queryKey;
  return fetchApi({
    url: apiDelivery(`Syncronize/multiple?date=${waybill}`),
    method: 'PUT',
  });
};
