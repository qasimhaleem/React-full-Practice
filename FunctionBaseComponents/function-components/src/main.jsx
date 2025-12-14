import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ref from './fcomponents/Referance/Ref'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ref />
  </StrictMode>,
)
