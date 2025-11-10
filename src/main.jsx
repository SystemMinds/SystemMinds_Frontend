import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './components/HeroSection-responsive.css'
import { LoadingProvider } from './context/LoadingProvider.jsx'
import { ToastProvider } from './context/ToastProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

