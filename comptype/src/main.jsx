import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Fun from './Fun'
import Clas from './Clas'
import Nest from './Nest'
import Render from './Render'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fun />
    <Clas />
    <Nest />
    <Render />
  </StrictMode>,
)
