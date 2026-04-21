import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProfileSideBarProvider } from './context/ProfileSideBarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileSideBarProvider >
      <App />
    </ProfileSideBarProvider>
  </StrictMode>,
)
