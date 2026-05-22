const TOKEN_KEY = "spc_admin_token";

export const getStoredAdminToken = () => localStorage.getItem(TOKEN_KEY);

export const setStoredAdminToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearStoredAdminToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
