import { Link } from "@swan-io/chicane";
import { useAuth } from "~/hooks/useAuth";
import { useLocale } from "~/hooks/useLocale";
import { Router } from "~/router";
import styles from "./Header.module.css";

function Header() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { _ } = useLocale();
  return (
    <header class={styles.header}>
      <h1>🐭</h1>

      <nav class={styles.desktopNav}>
        <ul>
          {isAuthenticated ? (
            <>
              <li>
                <Link to={Router.MiceList()}>{_("menu.miceList")}</Link>
              </li>
              <li>
                <Link to={Router.Settings()}>{_("menu.settings")}</Link>
              </li>
              <li>
                <a href="#" onClick={() => setIsAuthenticated(false)}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <li>
              <a href="#" onClick={() => setIsAuthenticated(true)}>
                Login
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export { Header };
