import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utility/theme";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/datenschutz";
import './utility/i18n';
import { useTranslation } from "react-i18next";
import LanguageWrapper from "./components/LanguageWrapper";

function App() {
  const { i18n } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
          <Route
            path="/:lang/*"
            element={
              <LanguageWrapper>
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="impressum" element={<Impressum />} />
                  <Route path="privacy-policy" element={<Datenschutz />} />
                </Routes>
              </LanguageWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;