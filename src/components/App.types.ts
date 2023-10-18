export type User = {
  name: string;
  email: string;
  password?: string;
  token?: string;
};

export type State = {
  user: User;
  token: string | undefined;
  error: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

export type Contact = {
  id: string;
  name: string;
  number: string;
};
