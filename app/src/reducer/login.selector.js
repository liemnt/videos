const getIsLoggedIn = state => {
  console.log(state);
  return state.login.isLoggedIn;
};
const getUserInfo = state => state.login.userInfo;

export { getIsLoggedIn, getUserInfo };
