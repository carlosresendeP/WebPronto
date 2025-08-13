import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/Globalstyles.js'
import {BrowserRouter, RouterProvider} from 'react-router'
import { Router } from './Routes/index.jsx'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/Themes/standard.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <BrowserRouter>
            <Router/>
            <GlobalStyles/>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
