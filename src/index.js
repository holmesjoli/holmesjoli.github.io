// React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import './utils/styles/styles.scss'

// Styles
import { createTheme, ThemeProvider } from "@mui/material";

// Pages
import Home from "./pages/Home";
import DesignProcess from "./pages/DesignProcess";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

const theme = createTheme({
  typography: {
    fontFamily: "Hind, Plex, Verdana, Geneva, Tahoma, sans-serif",
    fontSize: 13,
    lineHeight: 1.3
  },
  palette: {
    type: "dark",
    background: {
      paper: "#000000"
    },
    primary: {
      main: "#ea21ad"
    },
    secondary: {
      main: "#919295"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '.71rem',
          color: "#919295"
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
         padding: ".3rem",
         color: "#919295"
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
         border: "1px solid #919295",
         borderRadius: "5px",
         margin: ".3rem",
         padding: ".3rem"
        },
      },
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/DesignProcess" element={<DesignProcess />} /> */}
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);
