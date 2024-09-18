import { render } from "preact";
import { App } from "./components/App";
import "./reset.css";
import "./main.css";

render(<App />, document.getElementById("app")!);
