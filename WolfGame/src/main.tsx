import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { OptionProvider } from './context/view.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OptionProvider>
      <App />
    </OptionProvider>
  </StrictMode>,
)
