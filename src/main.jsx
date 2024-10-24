import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider, LanguageContext } from './store/languageContext'

import './stylesheets/main.css'
import './stylesheets/badge.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>

      <App />
    </LanguageProvider>
  </StrictMode>,
)
