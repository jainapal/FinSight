import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useAuthStore } from "./store/auth.store";

function App() {
  const fetchCurrentUser =
    useAuthStore(
      (state) => state.fetchCurrentUser
    );

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return <AppRoutes />;
}

export default App;