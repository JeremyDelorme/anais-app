import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';

import MezonPage from './components/pages/MezonPage';
import AproposPage from './components/pages/AproposPage';
import SciencePage from './components/pages/SciencePage';

import { createTheme, ThemeProvider } from '@mui/material';

export interface IAppProps { }

const theme = createTheme({
  palette: {
    primary: {
      main: '#E7ABFC'
    },
    secondary: {
      main: '#FCF2DA'
    },

    background: {
      default: ' #32D38A'
    },
    text: {
      primary: '#0753E9',
      secondary: '#000000',
    },

  },
  typography: {
    button: {
      fontSize: 16,
      fontWeight: 900,
    },
    fontFamily: 'Rubik Bubbles'
  }
},
);

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavbarComponent />
        <Routes>
          <Route path='/mezon' element={<MezonPage />} />
          <Route path='/apropos' element={<AproposPage />} />
          <Route path='/science' element={<SciencePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>


  )
}

export default App;
