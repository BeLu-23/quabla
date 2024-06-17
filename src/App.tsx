import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./utility/theme";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/datenschutz";
import './utility/i18n';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Ermittle die Browsersprache des Benutzers
    const browserLang = navigator.language.split('-')[0]; // Ermittelt 'en' aus 'en-US'
    const supportedLangs = ['de', 'en']; // Definiere die unterstützten Sprachen
    const lang = supportedLangs.includes(browserLang) ? browserLang : 'de'; // Fallback auf Deutsch, falls die Sprache nicht unterstützt wird
    i18n.changeLanguage(lang);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
          <Route path="/:lang" element={<HomeScreen />} />
          <Route path="/:lang/impressum" element={<Impressum />} />
          <Route path="/:lang/privacy-policy" element={<Datenschutz />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;