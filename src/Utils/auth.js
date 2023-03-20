import jwt_decode from "jwt-decode";

export const authentication = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(token));
  }
};

export const isAuthentication = () => {
  if (typeof window === "undefined") return false;
  else if (localStorage.getItem("jwt")) {
    let { exp } = jwt_decode(JSON.parse(localStorage.getItem("jwt")));
    if (new Date().getTime() < exp * 1000) {
      return true;
    } else {
      localStorage.removeItem("jwt");
      return false;
    }
  } else {
    return false;
  }
};

export const signOut = (cb) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    cb();
  }
};

export const userInfo = () => {
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const decoded = jwt_decode(jwt);
  return { ...decoded, jwt };
};
