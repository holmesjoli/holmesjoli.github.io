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

// Styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <GlobalStyles />
    <HashRouter>
      <Routes>
        <Route path="/" element={<CirclePacking />} />
        <Route path="/Network" element={<Network />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);

