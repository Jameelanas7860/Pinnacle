import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const navmenu =[
  { 
   path : "/",
   menu : "Home"

  },
  { 
   path : "/Blog",
   menu : "Blog"

  },
  
  { 
   path : "/About",
   menu : "About"

  },
  { 
    path : "/Resource",
    menu : "Resources"
 
   },
  { 
   path : "/Contact",
   menu : "Contact"

  }
]


function Navmenu() {

  return (
    <Navbar expand="lg" className="m-5" >
      <Container>
        <Link to='/' className='navbar-brand text-danger'><h1>Pinnacle</h1>
        <h4 className='text-danger'>Times To Photography</h4>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {
              navmenu.map((item , index)=>{
                return(
                <Link to={item.path} className='nav-link mx-4 text-success'>{item.menu}</Link>
                )
             })
            }
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navmenu
