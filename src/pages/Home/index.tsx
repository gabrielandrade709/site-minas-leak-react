import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';

import { Divider } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/index';
import Logo from '../../components/Logo/index'
import Location from '../../components/Location/index';
import WhatsappButton from '../../components/WhatsappButton/index';
import Footer from '../../components/Footer/index';

import HeaderMobile from '../../components/HeaderMobile/index';
import LogoMobile from '../../components/LogoMobile/index';
import FooterMobile from '../../components/FooterMobile/index';

import BombeiroHidrualico from '../../assets/bombeiroHidraulicoCard.jpg';
import CacaVazamento from '../../assets/cacaVazamentoCard.jpg';
import VideoInspecao from '../../assets/videoInspecaoCard.jpg';
import Desentupimento from '../../assets/desentupimentoCard.jpg';

AOS.init();

const Home = () => {
    return (
        <>
            <div className="main-mobile">
                <HeaderMobile />
                <div className="container">
                    <div className="logo-mobile" data-aos="fade-up" data-aos-duration="3000">
                        <LogoMobile />
                    </div>
                    <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                        <Divider />
                    </div>
                    <div className="bem-vindo focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                        <h2>Bem vindo a Minas Leak</h2>
                        <p>Logo abaixo você vera os nossos serviços.</p>
                    </div>
                    <div className="d-flex cardTop row focus-in-expand">
                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                            <Card.Img variant="top" src={BombeiroHidrualico} />
                            <Card.Body>
                                <Card.Title>Bombeiro hidráulico</Card.Title>
                                <Card.Text>
                                    Contrate um profissional para resolver problemas hidráulicos em sua casa.
                                </Card.Text>
                                <button className="saibaMais"><Link to="/bombeiro-hidrualico">Saiba mais</Link></button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="d-flex cardTop row focus-in-expand">
                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                            <Card.Img variant="top" src={CacaVazamento} />
                            <Card.Body>
                                <Card.Title>Caça vazamento</Card.Title>
                                <Card.Text>
                                    Esta com algum vazamento e não sabe de onde vem? Nos contrate e iremos achá-lo para você!
                                </Card.Text>
                                <button className="saibaMais"><Link to="/caca-vazamento">Saiba mais</Link></button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="d-flex cardTop row focus-in-expand">
                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                            <Card.Img variant="top" src={VideoInspecao} />
                            <Card.Body>
                                <Card.Title>Vídeo inspeção</Card.Title>
                                <Card.Text>
                                    Se precisa fazer uma filmagem em alguma rede para inspecioná-la, nos 
                                    contrate e faremos para você! 
                                </Card.Text>
                                <button className="saibaMais"><Link to="/video-inspecao">Saiba mais</Link></button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="d-flex cardTop row focus-in-expand">
                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                            <Card.Img variant="top" src={Desentupimento} />
                            <Card.Body>
                                <Card.Title>Desentupimento</Card.Title>
                                <Card.Text>
                                    Esta com um problema de entupimento e não sabe como resolver? Nos contrate e resolveremos
                                    esse problema!
                                </Card.Text>
                                <button className="saibaMais"><Link to="/desentupimento">Saiba mais</Link></button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                        <Divider />
                    </div>
                    <div className="localizacao focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                                <h2>Nossa localização</h2>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="3000">
                                <Location/>
                            </div>
                            <br />
                            <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                                <Divider />
                            </div>
                            <WhatsappButton />
                            <div data-aos="fade-up" data-aos-duration="3000">
                                <FooterMobile />
                            </div>
                </div>
            </div>
            <div className="main-desktop">
                <Header />
                <div id="page-home" className="container-fluid">
                    <div className="content">
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <Logo/>
                        </div>
                        <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                            <Divider />
                        </div>
                            <div className="bem-vindo focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                                <h2>Bem vindo a Minas Leak</h2>
                                <p>Logo abaixo você vera os nossos serviços.</p>
                            </div>
                            <div className="centeredCards">
                                <div className="card focus-in-expand">
                                    <div className="d-flex justify-content-center cardTop">
                                        <Card className="bg-dark text-white cardLeft" data-aos="fade-up" data-aos-duration="3000">
                                            <Card.Img variant="top" src={BombeiroHidrualico} />
                                            <Card.Body>
                                                <Card.Title>Bombeiro hidráulico</Card.Title>
                                                <Card.Text>
                                                Contrate um profissional para resolver problemas hidráulicos em sua casa.
                                                </Card.Text>
                                                <button className="saibaMais"><Link to="/bombeiro-hidrualico">Saiba mais</Link></button>
                                            </Card.Body>
                                        </Card>

                                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                                            <Card.Img variant="top" src={CacaVazamento} />
                                            <Card.Body>
                                                <Card.Title>Caça vazamento</Card.Title>
                                                <Card.Text>
                                                Esta com algum vazamento e não sabe de onde vem? Nos contrate e iremos achá-lo para você!
                                                </Card.Text>
                                                <button className="saibaMais"><Link to="/caca-vazamento">Saiba mais</Link></button>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <Card className="bg-dark text-white cardLeft" data-aos="fade-up" data-aos-duration="3000">
                                            <Card.Img variant="top" src={VideoInspecao} />
                                            <Card.Body>
                                                <Card.Title>Vídeo inspeção</Card.Title>
                                                <Card.Text>
                                                Se precisa fazer uma filmagem em alguma rede para inspecioná-la, nos 
                                                contrate e faremos para você! 
                                                </Card.Text>
                                                <button className="saibaMais"><Link to="/video-inspecao">Saiba mais</Link></button>
                                            </Card.Body>
                                        </Card>

                                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                                            <Card.Img variant="top" src={Desentupimento} />
                                            <Card.Body>
                                                <Card.Title>Desentupimento</Card.Title>
                                                <Card.Text>
                                                Esta com um problema de entupimento e não sabe como resolver? Nos contrate e resolveremos
                                                esse problema!
                                                </Card.Text>
                                                <button className="saibaMais"><Link to="/desentupimento">Saiba mais</Link></button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                                <Divider />
                            </div>
                            <div className="localizacao focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                                <h2>Nossa localização</h2>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="3000">
                                <Location/>
                            </div>
                            <br />
                            <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                                <Divider />
                            </div>
                            <WhatsappButton />
                            <div data-aos="fade-up" data-aos-duration="3000">
                                <Footer />
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;