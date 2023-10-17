import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navigation-bar.css'
function NavigationBar() {
    return (
     
      <Navbar style={{position:"fixed",top:"0",backgroundColor:'#020617',width:'100%'}}>
      <Container>
        <Navbar.Brand href='#home' ><spam className='Rami'>Rami</spam ><span className='L'>L.</span></Navbar.Brand>
        <Nav className="me-auto" style={{marginLeft:'auto'}}>
          <Nav.Link href="#home" style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}>Home</Nav.Link>
          <Nav.Link href="#about" style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}>About</Nav.Link>
          <Nav.Link href="#projects" style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}>Projects</Nav.Link>
          <Nav.Link href="#contact" style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}>Contact</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
    );
  }
  
  export default NavigationBar;