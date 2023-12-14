import React from "react";
import ReactDOMClient from "react-dom/client";
import { Desktop } from "./screens/Desktop";
import { Mobile } from "./screens/Mobile";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Mobile />);
