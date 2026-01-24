import { JSX, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
}

export default ProtectedRoute;
