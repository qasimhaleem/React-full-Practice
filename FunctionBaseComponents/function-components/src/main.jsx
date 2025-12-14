import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lazy from './fcomponents/Lazy-loading/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lazy />
  </StrictMode>,
)
