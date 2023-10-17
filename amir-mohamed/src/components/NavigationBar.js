import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';


const NavigationBar = ({ handlePageChange }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef(null);

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (navbarRef.current && !navbarRef.current.contains(e.target)) {
                closeNavbar();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    };


    const handleNavLinkClick = (url) => {
        scrollToTop();
        navigate(url);
    };


    return (
        <div role='navigation' className='bg-body-tertiary mar'>
            <Navbar className="fixed-top bg-body-tertiary custom-links " bg="light" expand="lg" ref={navbarRef} expanded={isNavbarOpen}>
                <Container fluid text-center>
                    <Navbar.Brand className='navbarBrand'>
                        <Nav.Link>
                            <Link to="/" onClick={() => handleNavLinkClick('/')} className='custom-links-name'> Amir Mohamed
                            </Link>

                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='toggle' onClick={toggleNavbar} />
                    <Navbar.Collapse id="navbarScroll" className={`navbar-scroll ${isNavbarOpen ? 'show' : ''}`}>
                        <Nav className="ml-auto mr-auto my-8 my-lg-4 outline-success navtext" navbarScroll>
                            <Nav.Link>
                                <Link to="/aboutme" onClick={() => handleNavLinkClick('/aboutme')} className='custom-link'>
                                    About Me
                                </Link>
                            </Nav.Link>


                            <Nav.Link>
                                <Link to="/projects" onClick={() => handleNavLinkClick('/projects')} className='custom-link'>
                                    Projects
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/resume" onClick={() => handleNavLinkClick('/resume')} className='custom-link'>
                                    Resume
                                </Link>
                            </Nav.Link>


                            <NavDropdown title="Contact" id="navDropdown" className='navbar-static  custom-links text'>
                                <NavDropdown.Item href="tel:+1(631)925-8216" onClick={() => handlePageChange()}>
                                 +1 (631)925-8216 <i class="fa fa-mobile" aria-hidden="true"></i>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="mailto:mirolasalle@gmail.com" onClick={() => handlePageChange()}> mirolasalle@gmail.com <i class="fa fa-envelope-o" aria-hidden="true"></i></NavDropdown.Item>
                             

                            </NavDropdown>

                            <NavDropdown title="Social Media" id="navDropdown" className=' pr-0 custom-links '>
                                <NavDropdown.Item
                                    href="https://www.github.com/amirlasalle" target="_blank" rel="noreferrer"
                                    onClick={() => handlePageChange()}
                                    className="custom-links"
                                >Github <i class="fa fa-github" aria-hidden="true"></i>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="https://www.linkedin.com/in/amirlasalle/" target="_blank" rel="noreferrer"
                                    onClick={() => handlePageChange()}
                                    className="custom-links"
                                >
                                    LinkedIn<span>{' '}</span><span><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="https://www.instagram.com/ichigo23__/" target="_blank" rel="noreferrer"
                                    onClick={() => handlePageChange()}
                                    className="custom-links"
                                >
                                    Instagram <i class="fa fa-instagram" aria-hidden="true"></i>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
