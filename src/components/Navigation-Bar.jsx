import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/navigation-bar.css'
import MenuIcon from '@mui/icons-material/Menu';
function NavigationBar() {
  const [show, setShow] = useState(false);
  const [display,setDisplay]=useState('none');
  
  const handleClose = () =>{ 
                   setShow(false);
                   setDisplay('none');
                  };
  const handleShow = () =>{
                   setShow(true);
                   setDisplay('block');  
                  }

    return (
      <>
      {/* Desktop navbar */}
     <div className='d-none d-lg-block'>
      <Navbar style={{zIndex: "1", position:"fixed",top:"0",backgroundColor:'#020617',width:'100%'}}>
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
    </div>
    {/* Mobile navbar */}
    <div className='d-lg-none'>
      <Nav style={{position:'fixed',top:'0', width:'100%',display:'flex',}}>
        <Nav.Item style={{marginRight:'auto',height:'90px',display:'flex',alignItems:'center',marginLeft:'10px'}}>
        <Navbar.Brand href='#home' style={{width:'100px'}} ><spam className='Rami'>Rami</spam ><span className='L'>L.</span></Navbar.Brand>
        
        </Nav.Item>
        { <Nav.Item style={{display:'flex',alignItems:'center',marginRight:'10px'}}>
        <btn onClick={handleShow}>
          <MenuIcon style={{color:'#FFFFFF',fontSize:'50px',marginLeft:'auto',}}/>
        </btn>
        </Nav.Item> }
{       
      <Offcanvas style={{display:display}} show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <Nav.Link href="#home" style={{color:'#020617' ,marginRight:'20px',fontSize:'20px',marginLeft:'10px',marginBottom:'15px'}}>Home</Nav.Link>
          <Nav.Link href="#about" style={{color:'#020617' ,marginRight:'20px',fontSize:'20px',marginLeft:'10px',marginBottom:'15px'}}>About</Nav.Link>
          <Nav.Link href="#projects" style={{color:'#020617' ,marginRight:'20px',fontSize:'20px',marginLeft:'10px',marginBottom:'15px'}}>Projects</Nav.Link>
          <Nav.Link href="#contact" style={{color:'#020617' ,marginRight:'20px',fontSize:'20px',marginLeft:'10px',marginBottom:'15px'}}>Contact</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas> }
      </Nav>
      </div>
    </>
    );
  }
  
  export default NavigationBar;