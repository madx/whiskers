import { ComponentChildren } from "preact";
import { useAuth } from "~/hooks/useAuth";

type Props = {
  fallback: ComponentChildren;
  children: ComponentChildren;
};

function Authenticated({ fallback, children }: Props) {
  const { isAuthenticated } = useAuth();
  return <div>{isAuthenticated ? children : fallback}</div>;
}

export { Authenticated };
