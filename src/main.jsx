import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameContextProvider } from './context/GameContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </StrictMode>,
)
