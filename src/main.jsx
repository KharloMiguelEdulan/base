import React from 'react'
import { ThemeProvider, createTheme,} from '@mui/material'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { blue, green, purple, red, yellow, } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
    third: yellow,
    fourth: green,
    fifth: purple
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  
    
)
