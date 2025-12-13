import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormikSignup from './fcomponents/Forms/FormikSignup'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormikSignup />
  </StrictMode>,
)
