import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WhatsApp } from '@material-ui/icons';
import { Divider } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/index';

import Logo from '../../assets/logotipo.png';
import BombeiroHidrualico from '../../assets/bombeiroHidraulicoCard.jpg';
import CacaVazamento from '../../assets/cacaVazamentoCard.jpg';
import VideoInspecao from '../../assets/videoInspecaoCard.jpg';
import Desentupimento from '../../assets/desentupimentoCard.jpg';

const Home = () => {
    return (
        <>
           <Header />
           <div id="page-home" className="container">
               <div className="content">
                   <div className="logo focus-in-expand">
                       <img src={Logo} />
                   </div>
                   <div className="center focus-in-expand">
                        <p className="ligar"><a  className="ligar" href="tel:{+55-31-3312-1335}">(31) 3312-1335</a> | <a className="ligar" href="tel:+55-31-99195-8081">(31) 99195-8081</a><WhatsApp className="whatsappIcon" /></p>
                   </div>
                   <Divider />
                    <div className="bem-vindo focus-in-expand">
                        <h2>Bem vindo a Minas Leak</h2>
                        <p>Logo abaixo você vera os nossos serviços.</p>
                    </div>
                    <div className="centeredCards">
                        <div className="card focus-in-expand">
                            <div className="d-flex justify-content-center cardTop">
                                <Card className="bg-dark text-white cardLeft">
                                    <Card.Img variant="top" src={BombeiroHidrualico} />
                                    <Card.Body>
                                        <Card.Title>Bombeiro hidráulico</Card.Title>
                                        <Card.Text>
                                        Contrate um profissional para resolver problemas hidráulicos em sua casa.
                                        </Card.Text>
                                        <button className="saibaMais"><Link to="/bombeiro-hidrualico">Saiba mais</Link></button>
                                    </Card.Body>
                                </Card>

                                <Card className="bg-dark text-white">
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
                                <Card className="bg-dark text-white cardLeft">
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

                                <Card className="bg-dark text-white">
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
               </div>
           </div>
        </>
    );
}

export default Home;