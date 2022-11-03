import {useQuery} from 'react-query';
import {delivery} from '../api/delivery';
import {userStore, authStore} from '../store';

export default function useDelivery(params = {}) {
  const {user} = userStore();
  const getAuthenticated = authStore((state) => state.isAuthenticated);

  const {isLoading, isError, data, error} = useQuery(
    ['delivery', {id: user.id}],
    delivery,
    {
      enabled: getAuthenticated,
      //   onSuccess: (res) => console.log(res),
    },
  );

  return {
    data,
    error,
    isError,
    isLoading,
  };
}
