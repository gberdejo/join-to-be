import { User } from '../src/models/User';

export const testUsers: User[] = [
  {
    sku: '12345',
    name: 'John',
    age: 30,
    friend: ['Mary', 'Peter'],
    hobby: [
      { name: 'Football', sku: '12345' },
      { name: 'Coding', sku: '12345' },
    ],
  },
  {
    sku: '12345',
    name: 'Mary',
    age: 25,
    friend: ['John', 'Peter'],
    hobby: [
      { name: 'Football', sku: '12345' },
      { name: 'Coding', sku: '12345' },
    ],
  },
];
