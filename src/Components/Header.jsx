import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div>
        <Navbar className="" style={{backgroundColor:'red'}}>
        <Container>
          <Navbar.Brand href="#home" style={{color:'white'}}>
          <Link to={'/'} style={{color:'white',textDecoration:'none'}}>
          <i class="fa-solid fa-photo-film fa-beat me-2"></i>
            Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header