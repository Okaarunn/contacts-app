import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./ContactApp";
import "./style.css";

import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
);
