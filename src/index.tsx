/* @refresh reload */

import { render } from "solid-js/web";
import "./index.css";

import App from "./app";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found");
}

render(() => <App />, root);
