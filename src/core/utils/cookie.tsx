import Cookies from "js-cookie";

export const setTokenCookie = (token: string): void => {
  const stringifyToken = JSON.stringify(token);
  Cookies.set("token", stringifyToken, {
    secure: true,
    sameSite: "strict",
    expires: 7,
  });
};

export const getTokenCookie = () => {
  return JSON.parse(Cookies.get("token") ?? "{}");
};

export const removeTokenCookie = () => {
  Cookies.remove("token");
};

export const isAuthenticated = () => {
  const tokens = getTokenCookie();
  if (!tokens?.access) {
    return false;
  }
  return true;
};
