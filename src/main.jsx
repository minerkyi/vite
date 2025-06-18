import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { Reset } from 'styled-reset';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reset />
    <App />
  </StrictMode>,
)
