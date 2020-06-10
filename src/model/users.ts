interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  userToken: string;
}

const Users: User[] = [
  {
      id: 1,
      email: 'u@email.com',
      username: 'q',
      password: 'a',
      userToken: 'token123'
  },
  {
      id: 2,
      email: 'user2@email.com',
      username: 'user2',
      password: 'pass1234',
      userToken: 'token12345'
  },
  {
      id: 3,
      email: 'testuser@email.com',
      username: 'testuser',
      password: 'testpass',
      userToken: 'testtoken'
  },
];

export default Users;
