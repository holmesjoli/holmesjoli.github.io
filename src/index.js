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
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import { PortfolioPage } from './components/Page';

import { itemData } from './utils/global';

const theme = createTheme({
  typography: {
    fontFamily: "Hind, Plex, Verdana, Geneva, Tahoma, sans-serif",
    fontSize: 13,
    lineHeight: 1.3
  },
  palette: {
    type: "dark",
    background: {
      paper: "#1a1d1f"
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
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "#17191b"
          // borderBottom: "1px solid #3a4047"
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#17191b"
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "#919295"
        }
      }
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Routes>
        {/* Navigation routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />

        {/* Portfolio routes */}
        {/* {
          itemData.map(d => {
            <Route path={"/portfolio/" + d.page} element={<PortfolioPage d={d} />} />
          })
        } */}

        <Route path="/portfolio/Algorithmically-Fair" element={<PortfolioPage d={itemData.find(d => d.page === "Algorithmically-Fair")} />} />
        <Route path="/portfolio/Banca-Intesa-Processes" element={<PortfolioPage d={itemData.find(d => d.page === "Banca-Intesa-Processes")} />} />
        {/* <Route path="/portfolio/Banca-Intesa-Knowledge-Network" element={<PortfolioPage d={itemData.find(d => d.page === "Banca-Intesa-Knowledge-Network")} />} /> */}
        {/* <Route path="/portfolio/Billy" element={<PortfolioPage d={itemData.find(d => d.page === "Billy")} />} /> */}
        <Route path="/portfolio/Black-Data" element={<PortfolioPage d={itemData.find(d => d.page === "Black-Data")} />} />
        {/* <Route path="/portfolio/Bloom" element={<PortfolioPage d={itemData.find(d => d.page === "Bloom")} />} /> */}
        {/* <Route path="/portfolio/Drawings-Collection" element={<PortfolioPage />} /> */}
        {/* <Route path="/portfolio/Ceramics-Collection" element={<PortfolioPage />} /> */}
        <Route path="/portfolio/Equitable-Teams" element={<PortfolioPage d={itemData.find(d => d.page === "Equitable-Teams")} />} />
        <Route path="/portfolio/Meta" element={<PortfolioPage d={itemData.find(d => d.page === "Meta")} />} />
        <Route path="/portfolio/Migration-Is-Natural" element={<PortfolioPage d={itemData.find(d => d.page === "Migration-is-Natural")} />} />
        {/* <Route path="/portfolio/Patient-Clinician-Interactions" element={<PortfolioPage d={itemData.find(d => d.page === "Patient-Clinician-Interactions")} />} /> */}
        {/* <Route path="/portfolio/Public-Policy-Collection" element={<PortfolioPage d={itemData.find(d => d.page === "Public-Policy-Collection")} />} /> */}
        {/* <Route path="/portfolio/Risky-Code" element={<PortfolioPage d={itemData.find(d => d.page === "Risky-Code")} />} /> */}
        {/* <Route path="/portfolio/Tutor-Match" element={<PortfolioPage d={itemData.find(d => d.page === "Tutor-Match")} />} /> */}
        <Route path="/portfolio/Visual-Ramblings" element={<PortfolioPage d={itemData.find(d => d.page === "Visual-Ramblings")} />} />
        <Route path="/portfolio/Visual-Version-Control" element={<PortfolioPage d={itemData.find(d => d.page === "Visual-Version-Control")} />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);
