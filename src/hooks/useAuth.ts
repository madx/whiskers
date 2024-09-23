import { useState } from "preact/hooks";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return { isAuthenticated, setIsAuthenticated };
}

type AuthContext = ReturnType<typeof useAuth>;

export { useAuth };
export type { AuthContext };
