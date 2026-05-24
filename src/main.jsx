import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

AOS.init({
  duration: 650,
  once: true,
  easing: 'ease-out',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
