import { User } from './interface';

export const admin: User = {
  id: 1,
  name: 'Manita',
  email: 'manita@gmail.com',
  avatar: './assets/images/manita.jpg',
};

export const guest: User = {
  name: 'unknown',
  email: 'unknown',
  avatar: './assets/images/avatar-default.jpg',
};
