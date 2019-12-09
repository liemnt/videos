import { LOGIN, LOGOUT } from "../types/login";

const login = ({ email, password }) => ({
  type: LOGIN,
  email,
  password
});

const logout = () => ({
  type: LOGOUT
});

export { login, logout };
