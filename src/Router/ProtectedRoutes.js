import { Navigate } from "react-router-dom";

import { isAuthentication } from "../Utils/auth";

const Protected = ({ children }) => {
  const auth = isAuthentication();

  return auth ? children : <Navigate to="/login" />;
};

export default Protected;
