import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LanguageProvider from "./i18n/LanguageProvider.jsx";
import AOS from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./css/main.css";

AOS.init({
    once: true,
    duration: 700,
    offset: 80,
    disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <LanguageProvider>
                <ScrollToTop />

                <App />
            </LanguageProvider>
        </BrowserRouter>
    </React.StrictMode>
);
