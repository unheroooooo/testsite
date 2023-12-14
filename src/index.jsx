import React from "react";
import ReactDOMClient from "react-dom/client";
import { Desktop, Theme, Mobile } from "./screens/Desktop";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Desktop />, <Mobile /> );
