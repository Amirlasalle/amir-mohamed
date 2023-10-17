import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from "../src/components/NavigationBar";
import PortfolioContainer from './pages/PortfolioContainer';
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <HashRouter > 
     <NavigationBar />
      <div id='root' className="flex-column justify-flex-start min-100-vh">
        <Header />

        <Routes>
          <Route path="/" element={<PortfolioContainer />}
          />
          <Route path="/aboutme" element={<AboutMe />}
          />
          <Route path="/projects" element={<Portfolio />}
          />
          <Route path="/resume" element={<Resume />}
          />

        </Routes>
      </div>
      <Footer />

    </HashRouter>
  );
}

export default App;
