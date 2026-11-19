import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename="/personal-portfolio">
            <ScrollToTop />

            <App />
        </BrowserRouter>
    </React.StrictMode>
);
