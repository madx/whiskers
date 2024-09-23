import { render } from "preact";
import { App } from "./components/App";
import "./main.css";
import "./reset.css";

// const goFullScreen = (ev: MouseEvent) => {
//   if (!ev.currentTarget) {
//     return;
//   }
//   (ev.currentTarget as HTMLBodyElement).requestFullscreen();
//
//   document.body.removeEventListener("click", goFullScreen);
// };
//
// document.body.addEventListener("click", goFullScreen);

render(<App />, document.getElementById("app")!);
