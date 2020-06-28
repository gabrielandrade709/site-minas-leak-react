import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import './styles.css';

const HeaderMobile = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top">
                <Navbar.Brand className="title">Minas Leak</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features" className="options">Inicio</Nav.Link>
                    <Nav.Link className="options">Contato</Nav.Link>
                    <Nav.Link className="options">Quem somos</Nav.Link>
                    <NavDropdown title="Nossos serviços" className="options" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="options">Bombeiro Hidráulico</NavDropdown.Item>
                        <NavDropdown.Item className="options">Caça vazamento</NavDropdown.Item>
                        <NavDropdown.Item className="options">Vídeo inspeção</NavDropdown.Item>
                        <NavDropdown.Item className="options">Desentupimento</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default HeaderMobile;