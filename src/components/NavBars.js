import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';
import '../css/nav.css'


const NavBars = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }
    return (
        <div>
            <Navbar className='navBarCompleta' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><a className="navbar-brand" href="/"></a></Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link> <Link to="/" className='link'>
                            Home
                        </Link></Nav.Link>
                        <Nav.Link><Link to="/add" className='link'>
                            Agregar Monitoria
                        </Link></Nav.Link>

                        <Nav.Link><Link to="/list" className='link'>
                            Listar Monitorias
                        </Link></Nav.Link>
                        <Nav.Link><Link to="/addMonitor" className='link'>
                            Agregar Monitor
                        </Link></Nav.Link>

                        <Nav.Link><Link to="/listMonitores" className='link'>
                            Listar Monitores
                        </Link></Nav.Link>
                        



                    </Nav>
                    
                    <Nav.Link onClick={handleLogout} className='link'>Logout</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBars;