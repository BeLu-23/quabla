import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./utility/theme";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/datenschutz";
import './utility/i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/de" />} />
          <Route path="/:lang" element={<HomeScreen />} />
          <Route path="/:lang/impressum" element={<Impressum />} />
          <Route path="/:lang/privacy-policy" element={<Datenschutz />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
