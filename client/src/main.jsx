import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { StorageProvider } from './context/StorageContext'  // <-- import your StorageProvider

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <StorageProvider>  {/* Wrap StorageProvider here */}
        <App />
      </StorageProvider>
    </AuthProvider>
  </BrowserRouter>
)
