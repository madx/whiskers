import { useLocale } from "~/hooks/useLocale";
import { MainSection } from "./MainSection";

function SettingsPage() {
  const { _ } = useLocale();
  return <MainSection>Settings</MainSection>;
}
export { SettingsPage };
