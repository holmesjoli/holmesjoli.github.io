// React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import DesignProcess from "./pages/DesignProcess";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

// Styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <GlobalStyles />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DesignProcess" element={<DesignProcess />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);

