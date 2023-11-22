import {ThemeProvider,createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import WhoWeAre from './components/WhoWeAre';

function App() {
  const theme=createTheme({
    palette:{
      mode:'light'
    }
  })
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <WhoWeAre></WhoWeAre>
    </ThemeProvider>
  );
}

export default App;
