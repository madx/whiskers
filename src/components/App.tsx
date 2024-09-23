import { match } from "ts-pattern";
import { IsAuthenticatedContext } from "~/contexts/IsAuthenticatedContext";
import { useAuth } from "~/hooks/useAuth";
import { Router } from "~/router";
import { Header } from "./Header";
import { MicePage } from "./MicePage";
import { SettingsPage } from "./SettingsPage";

export function App() {
  const authContext = useAuth();
  const route = Router.useRoute(["Settings", "MiceList"]);

  return (
    <IsAuthenticatedContext.Provider value={authContext}>
      <Header />

      {match(route)
        .with({ name: "MiceList" }, () => <MicePage />)
        .with({ name: "Settings" }, () => <SettingsPage />)
        .otherwise(() => (
          <div>Not found</div>
        ))}
    </IsAuthenticatedContext.Provider>
  );
}

// const pb = new PocketBase("http://127.0.0.1:8090");
// const [user, setUser] = useState<AuthModel>(null);
// useEffect(() => {
//   const loadUser = async () => {
//     if (pb.authStore.isValid) {
//       setUser(pb.authStore.model);
//     }
//   };
//
//   loadUser();
// });
// const login = async () => {
//   const authData = await pb
//     .collection("users")
//     .authWithOAuth2({ provider: "discord" });
//   setUser(authData.record);
// };
// const logout = () => {
//   pb.authStore.clear();
//   setUser(null);
// };
