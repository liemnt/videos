import { combineReducers } from "redux";
import { LOGIN, LOGOUT } from "../types/login";

const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case LOGIN: {
      return true;
    }
    case LOGOUT: {
      return false;
    }
    default:
      return state;
  }
};

const initialUserInfo = { email: null, password: null };
const userInfo = (state = initialUserInfo, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        email: action.email,
        password: action.password
      };
    }
    case LOGOUT: {
      return initialUserInfo;
    }
    default:
      return state;
  }
};

export default combineReducers({
  isLoggedIn,
  userInfo
});
