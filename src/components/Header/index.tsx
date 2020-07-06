import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
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
            <nav>
                <Navbar className="navColorDesktop focus-in-expand" sticky="top" >
                    <Nav className="center">
                        <Nav.Link className="navBottons"><Link to="/"><a>Início</a></Link></Nav.Link>
                        <NavDropdown title={
                            <a className="navBottons">Nossos serviços</a>
                        }
                            id="nav-dropdown"
                            className="navBottons"
                        >
                            <NavDropdown.Item><Link to="/bombeiro-hidraulico">Bombeiro hidráulica</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/caca-vazamento">Caça vazamento</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/video-inspecao">Vídeo inspeção</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/desentupimento">Desentupimento</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Navbar className="title  navBottons">Minas Leak</Navbar>
                        <Nav.Link className="navBottons"><Link to="contato"><a>Contato</a></Link></Nav.Link>
                        <Nav.Link className="navBottons" onClick={handleShow} ><a>Quem somos</a></Nav.Link>
                    </Nav>
                </Navbar>
            </nav>
        </>
    );
}

export default Header;