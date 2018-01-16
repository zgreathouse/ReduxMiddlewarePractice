import { FETCH_USERS } from './types';

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: [
    { name: 'Sora'},
    { name: 'Riku'},
    { name: 'Kairi'}
  ]
});
