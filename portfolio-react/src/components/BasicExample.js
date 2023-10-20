import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

function BasicExample() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY > 50){
        setScrolled(true)
      } 
      else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onscroll)

    return ()=> window.removeEventListener("scroll", onscroll)

  }, [])
  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='socials'>
              <a href='#'><img src={''} alt='github-logo'/></a>
              <a href='#'><img src={''} alt='linkedin-logo'/></a>
            </div>
            <button className='connect-button' onClick={()=> console.log('It works!')}>Let's connect!</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;