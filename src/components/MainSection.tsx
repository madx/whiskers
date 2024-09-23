import { ComponentChildren } from "preact";
import styles from "./MainSection.module.css";

type Props = {
  children: ComponentChildren;
};
function MainSection({ children }: Props) {
  return <main class={styles.MainSection}>{children}</main>;
}

export { MainSection };
