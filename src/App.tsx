import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import theme from './components/theme'
import HomeScreen from './pages/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/datenschutz'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter basename="/quabla">
          <Routes>
            <Route path='/' Component={HomeScreen} />
            <Route path='/impressum/' Component={Impressum} />
            <Route path='/datenschutz/' Component={Datenschutz} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
