import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ProviderMovieContext } from './context/MovieContex.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    {/* Providers globales de la app */}
    <ProviderMovieContext>
    <App />
    </ProviderMovieContext>
  </StrictMode>
  </BrowserRouter>
)
