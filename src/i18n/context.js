import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

export const useLang = () => useContext(LanguageContext);
