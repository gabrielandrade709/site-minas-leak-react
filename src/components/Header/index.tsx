import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <>
            <nav>
                <Navbar className="navColorDesktop focus-in-expand" sticky="top" >
                        <Nav className="center">
                        <Nav.Link className="navBottons"><Link to="/"><a>Inicio</a></Link></Nav.Link>
                        <NavDropdown title={
                                <a className="navBottons">Nossos serviços</a>
                            } 
                            id="nav-dropdown" 
                            className="navBottons"
                        >
                            <NavDropdown.Item><Link to="/bombeiro-hidrualico">Bombeiro hidráulica</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/caca-vazamento">Caça vazamento</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/video-inspecao">Vídeo inspeção</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/desentupimento">Desentupimento</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Navbar className="title  navBottons">Minas Leak</Navbar>
                        <Nav.Link className="navBottons"><Link to="contato"><a>Contato</a></Link></Nav.Link>
                        <Nav.Link href="#pricing" className="navBottons"><a>Quem somos</a></Nav.Link>
                        </Nav>
                    </Navbar>
            </nav>
        </>
    );
}

export default Header;