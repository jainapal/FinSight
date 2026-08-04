import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const isInitialised = useAuthStore(
    (state) => state.isInitialised
  );

  const location = useLocation();

  if (!isInitialised) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;