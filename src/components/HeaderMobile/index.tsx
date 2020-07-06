import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './styles.css';

const HeaderMobile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <div className="title-card">
                        <h1>Quem somos</h1>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        A <b>Minas Leak</b> conta com uma equipe técnica especializada com mais de 15 anos de experiência no mercado,
                        e o nosso principal foco é o compromisso com os nossos clientes e total garantia de todos os serviços prestados,
                        prezando sempre o bem-estar e comodidade dos nossos clientes.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="fechar" onClick={handleClose}>
                        Fechar
                    </button>
                </Modal.Footer>
            </Modal>

            <Navbar collapseOnSelect expand="lg" fixed="top" className="focus-in-expand">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className="title">Minas Leak</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="options navOptions"><Link to="/"><a>Início</a></Link></Nav.Link>
                        <Nav.Link className="options navOptions"><Link to="contato"><a>Contato</a></Link></Nav.Link>
                        <Nav.Link className="options" onClick={handleShow}>Quem somos</Nav.Link>
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