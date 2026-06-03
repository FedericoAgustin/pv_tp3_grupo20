import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/Rutas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rutas />
  </StrictMode>
)
