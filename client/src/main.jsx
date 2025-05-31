import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>,
// )
import { AuthProvider } from './context/AuthContext';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);


