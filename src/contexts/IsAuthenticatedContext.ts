import { createContext } from "preact";
import { AuthContext } from "~/hooks/useAuth";

const IsAuthenticatedContext = createContext<AuthContext | null>(null);

export { IsAuthenticatedContext };
