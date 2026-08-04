import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";
import { useAuthStore } from "./store/auth.store";

function App() {
  const fetchCurrentUser = useAuthStore(
    (state) => state.fetchCurrentUser
  );

  const isInitialised = useAuthStore(
    (state) => state.isInitialised
  );

  useEffect(() => {
    if (!isInitialised) {
      fetchCurrentUser();
    }
  }, [fetchCurrentUser, isInitialised]);

  return <AppRoutes />;
}

export default App;