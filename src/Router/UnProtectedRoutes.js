import { Navigate } from "react-router-dom";

import { isAuthentication } from "../Utils/auth";

const UnProtected = ({ children }) => {
  const auth = isAuthentication();

  return auth ? <Navigate to="/" /> : children;
};

export default UnProtected;
