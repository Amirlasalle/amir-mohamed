import React from 'react';
import './App.css';
import PortfolioContainer from './pages/PortfolioContainer';
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

function App() {
  return (
    <div id='root' className="App">
        <Header />
      <div>
        <PortfolioContainer className="main-content" />
      </div>
      <Footer className="w-100 mt-auto mb-0 bg-secondary p-4"/>
    </div>
  );
}

export default App;
