import { createRoot } from "react-dom/client";
import React from "react";
import App from './App.tsx';

const root = createRoot(document.getElementById("root")  as HTMLElement)
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
);

