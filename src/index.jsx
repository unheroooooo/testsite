import React from "react";
import ReactDOMClient from "react-dom/client";
import { Theme } from "./screens/Theme";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Theme />);
