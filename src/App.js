import {ThemeProvider,createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import WhoWeAre from './components/WhoWeAre';
import OurServices from './components/OurServices';
import FeaturedProducts from './components/FeaturedProducts';
import OurStory from './components/OurStory';
import Footer from './components/Footer';

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
      <FeaturedProducts></FeaturedProducts>
      <OurStory></OurStory>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
