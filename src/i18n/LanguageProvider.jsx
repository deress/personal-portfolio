import { useEffect, useState } from "react";
import { LanguageContext } from "./context";
import { ui } from "./ui";

const getInitialLang = () => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "id") return saved;
    return navigator.language?.toLowerCase().startsWith("id") ? "id" : "en";
};

const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);
    }, [lang]);

    const toggleLang = () => setLang((l) => (l === "en" ? "id" : "en"));

    // Short UI strings: t("continue")
    const t = (key) => ui[lang][key] ?? ui.en[key] ?? key;

    // Data fields written as { en, id }; plain values are returned as-is
    const tr = (field) =>
        field && typeof field === "object" && "en" in field && "id" in field
            ? field[lang]
            : field;

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, tr }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
