import {ThemeProvider,createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes'

function App() {
  const theme=createTheme({
    palette:{
      mode:'light',
      main: {
        main: '#2E3192',
        light: '#222222',
        dark: '#0E1172',
        contrastText: '#ffffff',
      },
    }
  })
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <BrowserRouter >
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
