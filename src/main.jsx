import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav.jsx";
import App from "./App.jsx";
import Footer from "./Footer.jsx";
import "assets/css/style.css";
import { iconArr } from "./Icons.jsx";

ReactDOM.createRoot(document.getElementById("navbar")).render(
  <React.StrictMode>
    <Nav icon={iconArr} />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("portfolio")).render(
  <React.StrictMode>
    <App icon={iconArr} />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("footer")).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
); 
