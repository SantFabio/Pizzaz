import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './ui/styles/GlobalStyles.style.jsx'
import { ThemeProvider } from 'styled-components'
import theme from "./ui/styles/Theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </>


  // </React.StrictMode>, 
)
