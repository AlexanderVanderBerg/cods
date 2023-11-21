import {ThemeProvider,createTheme} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Button } from '@mui/material';


function App() {
  const theme=createTheme({
    palette:{
      mode:'light'
    }
  })
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <Button variant='contained' color='primary' >Hello World</Button>

      <div className="bg-gray-200 p-8">
        <h1 className="text-4xl font-bold text-blue-600">My Tailwind React App</h1>
        <p className="text-gray-700 mt-4">Welcome to my app using Tailwind CSS!</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
