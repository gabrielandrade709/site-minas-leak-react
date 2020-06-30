import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './styles.css';

const HeaderMobile = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className="focus-in-expand">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className="title">Minas Leak</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="options navOptions"><Link to="/"><a>Inicio</a></Link></Nav.Link>
                        <Nav.Link className="options navOptions"><Link to="contato"><a>Contato</a></Link></Nav.Link>
                        <Nav.Link className="options">Quem somos</Nav.Link>
                        <NavDropdown title="Nossos serviços" className="options dropdownOptions" id="collasible-nav-dropdown">
                            <NavDropdown.Item className="options"><Link to="/bombeiro-hidraulico">Bombeiro hidráulica</Link></NavDropdown.Item>
                            <NavDropdown.Item className="options"><Link to="/caca-vazamento">Caça vazamento</Link></NavDropdown.Item>
                            <NavDropdown.Item className="options"><Link to="/video-inspecao">Vídeo inspeção</Link></NavDropdown.Item>
                            <NavDropdown.Item className="options"><Link to="/desentupimento">Desentupimento</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default HeaderMobile;