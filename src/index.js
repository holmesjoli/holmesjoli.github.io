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
import AlgorithmicallyFair from "./pages/portfolio/Algorithmically-Fair";
import BancaIntesaProcesses from "./pages/portfolio/Banca-Intesa-Processes";
import BancaIntesaKnowledgeNetwork from "./pages/portfolio/Banca-Intesa-Knowledge-Network";
import Billy from "./pages/portfolio/Billy";
import Bloom from "./pages/portfolio/Bloom";
import BlackData from "./pages/portfolio/Black-Data";
import CeramicsCollection from "./pages/portfolio/Ceramics";
import DrawingsCollection from "./pages/portfolio/Drawings";
import EquitableTeams from "./pages/portfolio/Equitable-Teams";
import MigrationIsNatural from "./pages/portfolio/Migration-is-Natural";
import Meta from "./pages/portfolio/Meta";
import PatientClinicianInteractions from "./pages/portfolio/Patient-Clinician-Interactions";
import PublicPolicyCollection from "./pages/portfolio/Public-Policy-Collection";
import RiskyCode from "./pages/portfolio/Risky-Code";
import TutorMatch from "./pages/portfolio/Tutor-Match";
import VisualVersionControl from "./pages/portfolio/Visual-Version-Control";

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
        {/* Navigation routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/DesignProcess" element={<DesignProcess />} /> */}
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />

        {/* Portfolio routes */}
        <Route path="/portfolio/Algorithmically-Fair" element={<AlgorithmicallyFair />} />
        <Route path="/portfolio/Banca-Intesa-Processes" element={<BancaIntesaProcesses />} />
        <Route path="/portfolio/Banca-Intesa-Knowledge-Network" element={<BancaIntesaKnowledgeNetwork />} />
        <Route path="/portfolio/Billy" element={<Billy />} />
        <Route path="/portfolio/Black-Data" element={<BlackData />} />
        <Route path="/portfolio/Bloom" element={<Bloom />} />
        <Route path="/portfolio/Drawings-Collection" element={<DrawingsCollection />} />
        <Route path="/portfolio/Ceramics-Collection" element={<CeramicsCollection />} />
        <Route path="/portfolio/Equitable-Teams" element={<EquitableTeams />} />
        <Route path="/portfolio/Meta" element={<Meta />} />
        <Route path="/portfolio/Migration-Is-Natural" element={<MigrationIsNatural />} />
        <Route path="/portfolio/Patient-Clinician-Interactions" element={<PatientClinicianInteractions />} />
        <Route path="/portfolio/Public-Policy-Collection" element={<PublicPolicyCollection />} />
        <Route path="/portfolio/Risky-Code" element={<RiskyCode />} />
        <Route path="/portfolio/Tutor-Match" element={<TutorMatch />} />
        <Route path="/portfolio/Visual-Version-Control" element={<VisualVersionControl />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);
