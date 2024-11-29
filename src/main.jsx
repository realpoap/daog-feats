//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './store/languageContext'

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import './stylesheets/badge.css'
import './stylesheets/bubble.css'
import './stylesheets/main.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <LanguageProvider>
    <App />
  </LanguageProvider>
  //  </StrictMode>
)
