export const isLogin = state => state.auth.isLoggedIn;

export const isRefresh = state => state.auth.isRefreshing;

export const user = state => state.auth.user;

export const authError = state => state.auth.error;
