import jsCookie from 'js-cookie';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/login/action';

const TopNav = () => {
  const dispatch = useDispatch();
  const  Navigate = useNavigate()
  const {users} = useSelector(state=>state.getUser);

console.log(users);
  const handleLogOut = (e)=>{
    e.preventDefault();
    dispatch(logOut());
    Navigate('/login')
    jsCookie.remove('token')
  }





  return (
    <>

    <Navbar bg="light" className='pl-2' expand="lg">
      <Container className="row justify-content-between">
        <div><Navbar.Brand href="#home"><h3 className='mb-0 lh-1'>CB Builder</h3></Navbar.Brand></div>

        <div className='mr-5'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogOut} href="#action/3.1">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
       
        
      </Container>
    </Navbar>
     </>
  )
}

export default TopNav