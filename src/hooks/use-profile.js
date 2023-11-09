import {useQuery} from 'react-query';
import {initial} from '../api/user';
import {userStore, authStore} from '../store';

export default function useProfile() {
  const {setUser} = userStore();
  const getAuthenticated = authStore(state => state.isAuthenticated);
  const getUsername = authStore(state => state.username);

  const {isLoading, isError, data, error} = useQuery(
    ['profile', {username: getUsername}],
    initial,
    {enabled: getAuthenticated, onSuccess: res => setUser(res.courier)},
  );

  return {
    data,
    error,
    isError,
    isLoading,
  };
}
