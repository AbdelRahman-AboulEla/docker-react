import { render } from "@testing-library/react";
import App from "./App";
import ReactDom from "react-dom";

test("renders a link with correct attributes", () => {
  const div = document.createElement("div");
  render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});

test("renders a link with correct attribute", () => {
  const div = document.createElement("div");
  render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});
