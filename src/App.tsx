import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./utility/theme";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/datenschutz";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/impressum/" element={<Impressum />} />
          <Route path="/datenschutz/" element={<Datenschutz />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
