import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navigation-bar.css'
function NavigationBar() {
    return (
      <Navbar  collapseOnSelect expand="lg" className="nav">
        <Container >
          <Navbar.Brand className="brand"><span className='Rami'>Rami</span ><span className='L'>L.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav >
            <Nav.Link  href="#home" style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}>Home</Nav.Link>
              <Nav.Link  href="#about" style={{color:'#FFFFFF',marginRight:'20px',fontSize:'20px'}}>
                About
              </Nav.Link>
              <Nav.Link  href="#projects" style={{color:'#FFFFFF',marginRight:'20px',fontSize:'20px'}}>Projects</Nav.Link>
              <Nav.Link  href="#contact" style={{color:'#FFFFFF',marginRight:'20px',fontSize:'20px'}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavigationBar;