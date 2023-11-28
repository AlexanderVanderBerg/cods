import {ThemeProvider,createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import WhoWeAre from './components/WhoWeAre';
import OurServices from './components/OurServices';

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
      <OurServices></OurServices>
    </ThemeProvider>
  );
}

export default App;
