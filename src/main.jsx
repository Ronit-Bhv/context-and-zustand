import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './provider/ThemeProvider.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ListA from './components/ListA.jsx'
import ListB from './components/ListB.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/list-a" element={<ListA />} />
          <Route path="/list-b" element={<ListB />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
