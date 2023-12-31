import NavigationBar from "./NavigationBar";
import Container from 'react-bootstrap/Container';
import AboutMe from "./AboutMe";
import Contact from "./ContactMe";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import React, { useState } from "react";

const Header = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    
    if (currentPage === 'aboutme') {
      return <AboutMe />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
  
  <div className="mt-0 p-0">
  
    <header >
      <NavigationBar page={currentPage} handlePageChange={handlePageChange} />
    </header>

    <Container>

      {renderPage()}
    </Container>

  </div>
  )
}


export default Header;