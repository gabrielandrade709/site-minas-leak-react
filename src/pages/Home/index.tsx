import React, { useEffect } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import MetaTags from 'react-meta-tags';

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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="wrapper">
                <MetaTags>
                    <title>Minas Leak - início</title>
                    <meta name="description" content="Prestamos os serviços de bombeiro hidráulico, caça vazamento, vídeo inspeção e desentupimento." />
                    <meta name="keywords" content="caça vazamento,bombeiro hidráulico,vídeo inspeção,desentupimento,bombeiro hidráulico em bh,caça vazamento em bh,localização de vazamento,desentupidora,
                        desentupidora 24 horas,desentupidora em bh,desentupidora em nova lima,bombeiro hidráulico 24 horas,bombeiro hidráulico em bh 24 horas,desentupidora plantão 24 horas,
                        bombeiro hidráulico plantão 24 horas,telefone de plantão desentupidora,caça vazamento com geofone,caça vazamento em nova lima,bombeiro hidráulico buritis,
                        bombeiro hidráulico belvedere,bombeiro hidráulico no são bento,bombeiro hidráulico zona sul,desentupidora zona sul,empresa de desentupimento,empresa de caça vazamento,
                        caça vazamento com scanner,empresa que faz filmagem de tubulação,empresa que faz vídeo inspeção,empresa de vídeo inspeção em bh,vídeo inspeção robotizada,
                        conserto de válvula de descarga,bombeiro que conserta cano,bombeiro hidráulico caça vazamento,bombeiro hidráulico contagem,bombeiro hidráulico bh padre eustáquio,bombeiro hidráulico bh floresta,bombeiro hidráulico belo horizonte,
                        bombeiro hidraulico caiçara bh,bombeiro hidraulico dona clara bh,bombeiro hidráulico em contagem,bombeiro hidráulico em betim,bombeiro hidráulico em belo horizonte,
                        eletricista e bombeiro hidráulico,eletricista e bombeiro hidráulico (sos reparos),bombeiro hidráulico e caça vazamento belo horizonte,bombeiro hidraulico e eletricista,
                        bombeiro hidraulico 24 horas bh,bombeiro hidraulico belo horizonte,bombeiro hidraulico lagoa santa,bombeiro hidraulico nova lima,bombeiro hidráulico ou encanador,
                        bombeiro hidráulico telefone,caça vazamentos bh,caça vazamentos de agua,caça vazamento bh,caça vazamento contagem,caça vazamento agua,caça vazamento apartamento,
                        caça vazamento agua fria,caçadores de vazamento,caça vazamento de agua,caça vazamento de esgoto,caça vazamento com aparelho,empresa de caça vazamento,serviço de caça vazamento,
                        telefone de caça vazamento,caça vazamento em residência,caça vazamento em apartamento,desentupidora e caça vazamento,encanador e caça vazamentos,
                        bombeiro hidráulico e caça vazamento belo horizonte,caça vazamento e infiltração,caça vazamentos e desentupidora,caça vazamentos e desentupidora site,caça vazamento e reparos,
                        caça vazamento geofone,caça vazamento hidrante,caça vazamento hidráulica,caça vazamento hidrômetro,caça vazamento infiltração,empresa que caça vazamento,caça vazamento residencial,
                        caça vazamento telefone,caça vazamento com raio x,caça vazamento zona sul,caça vazamento de agua em bh,empresa de caça vazamentos em bh,caça vazamentos de agua bh,bombeiro hidraulico bh 24 horas,bombeiro hidraulico bh pampulha,bombeiro hidraulico bh padre eustaquio,bombeiro hidraulico bh santa efigenia,
                        bombeiro hidraulico bh floresta,bombeiro hidraulico bh savassi,bombeiro hidraulico bh anchieta,bombeiro hidraulico santa amelia bh,bombeiro hidraulico bh alipio de melo,
                        bombeiro hidraulico bh santo antonio,bombeiro hidraulico bh jardim america,serviço de bombeiro hidraulico em bh,bombeiro hidraulico bh buritis,bombeiro hidraulico bh boa vista,
                        bombeiro hidraulico bh betania,bombeiro hidraulico barreiro bh,bombeiro hidraulico bairro buritis bh,bombeiro hidraulico bh castelo,bombeiro hidraulico bh cidade nova,
                        bombeiro hidraulico bh carlos prates,bombeiro hidraulico bh cachoeirinha,bombeiro hidraulico centro bh,bombeiro hidraulico caiçara bh,bombeiro hidraulico bairro castelo bh,
                        bombeiro hidraulico dona clara bh,bombeiro hidraulico bh dona clara,bombeiro hidraulico bh floramar,bombeiro hidraulico sagrada familia bh,bombeiro hidraulico bairro floresta bh,
                        bombeiro hidraulico gutierrez bh,bombeiro hidráulico bh mg,bombeiro hidráulico bh belo horizonte - mg,bombeiro hidráulico santa monica bh,bombeiro hidraulico bh nova suica,
                        bombeiro hidraulico bh nova suissa,bombeiro hidraulico em venda nova bh,bombeiro hidraulico cidade nova bh,bombeiro hidraulico bh planalto,bombeiro hidraulico bh palmares,
                        bombeiro hidraulico prado bh,bombeiro hidraulico predial bh,bombeiro hidraulico bairro planalto bh,bombeiro hidraulico bh sagrada familia,bombeiro hidraulico bh santa monica,
                        bombeiro hidraulico bh santa amelia,bombeiro hidraulico bh santa tereza,bombeiro hidraulico bh serra,bombeiro hidraulico santa tereza bh,bombeiro hidraulico bh venda nova,
                        bombeiro hidraulico boa vista bh,desentupidora em bh mg,desentupidora em bh e regiao,desentupidora em bh centro,desentupidora em barreiro bh,desentupidora bh pampulha,
                        desentupidora bh 24 horas,desentupidora bh venda nova,serviço de desentupidora em bh,desentupidora bh bairro castelo,desentupidora bh barroca,desentupidora bh betim,
                        desentupidora buritis bh,desentupidora bh - caça vazamentos,desentupidora bh concordia,desentupidora caiçara bh,desentupidora castelo bh,desentupidora contorno bh,
                        desentupidora de esgoto em bh,desentupidora de pia em bh,desentupidora de fossa em bh,desentupidora no floresta em bh,desentupidora gutierrez bh,desentupidora jaragua bh,
                        desentupidora bh belo horizonte - mg,desentupidora em venda nova bh,desentupidora no barreiro em bh,desentupidora bh padre eustaquio,desentupidora serra bh,video inspeção de tubulação de esgoto,video inspeção de tubulação,video inspeção robotizada,video inspeção de esgoto,
                        video inspeção de tubulações,inspeção video de tubagens,serviço de video inspeção,video inspeção esgoto,vídeo inspeção robotizada"
                    />
                    <meta name="author" content="Minas Leak" />
                    <meta name="goooglebot" content="index,follow" />
                    <meta name="robots" content="index,follow" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="requested_url" content="https://www.minasleak.com.br" />
                    <meta property="og:title" content="Minas Leak" />
                    <meta property="og:site_name" content="Minas Leak" />
                    <meta property="og:description" content="Prestamos os serviços de bombeiro hidráulico, caça vazamento, vídeo inspeção e desentupimento." />
                    <meta property="og:type" content="website" />
                </MetaTags>
            </div>
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
                        <Link to="/bombeiro-hidraulico" ><Card.Img variant="top" src={BombeiroHidrualico} /></ Link>
                            <Card.Body>
                                <Card.Title>Bombeiro hidráulico</Card.Title>
                                <Card.Text>
                                    Contrate um profissional para resolver problemas hidráulicos.
                                </Card.Text>
                                <button className="saibaMais"><Link to="/bombeiro-hidraulico">Saiba mais</Link></button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="d-flex cardTop row focus-in-expand">
                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                        <Link to="/caca-vazamento" ><Card.Img variant="top" src={CacaVazamento} /></ Link>
                            <Card.Body>
                                <Card.Title>Caça vazamento</Card.Title>
                                <Card.Text>
                                    Está com algum vazamento e não sabe de onde vem? Nos contrate e iremos achá-lo para você!
                                </Card.Text>
                                <button className="saibaMais"><Link to="/caca-vazamento">Saiba mais</Link></button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="d-flex cardTop row focus-in-expand">
                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                        <Link to="/video-inspecao" ><Card.Img variant="top" src={VideoInspecao} /></Link>
                            <Card.Body>
                                <Card.Title>Vídeo inspeção</Card.Title>
                                <Card.Text>
                                    Se precisa fazer alguma filmagem em uma rede para inspecioná-la, nos contrate e faremos para você!
                                </Card.Text>
                                <button className="saibaMais"><Link to="/video-inspecao">Saiba mais</Link></button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="d-flex cardTop row focus-in-expand">
                        <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                        <Link to="/desentupimento" ><Card.Img variant="top" src={Desentupimento} /></Link>
                            <Card.Body>
                                <Card.Title>Desentupimento</Card.Title>
                                <Card.Text>
                                    Está com algum problema de entupimento e não sabe como resolver? Nos contrate e resolveremos
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
                        <Location />
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
                            <Logo />
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
                                    <Link to="/bombeiro-hidraulico" ><Card.Img variant="top" src={BombeiroHidrualico} /></Link>
                                        <Card.Body>
                                            <Card.Title>Bombeiro hidráulico</Card.Title>
                                            <Card.Text>
                                                Contrate um profissional para resolver problemas hidráulicos.
                                                </Card.Text>
                                            <button className="saibaMais"><Link to="/bombeiro-hidraulico">Saiba mais</Link></button>
                                        </Card.Body>
                                    </Card>

                                    <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                                    <Link to="/caca-vazamento" ><Card.Img variant="top" src={CacaVazamento} /></Link>
                                        <Card.Body>
                                            <Card.Title>Caça vazamento</Card.Title>
                                            <Card.Text>
                                                Está com algum vazamento e não sabe de onde vem? Nos contrate e iremos achá-lo para você!
                                                </Card.Text>
                                            <button className="saibaMais"><Link to="/caca-vazamento">Saiba mais</Link></button>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <Card className="bg-dark text-white cardLeft" data-aos="fade-up" data-aos-duration="3000">
                                    <Link to="/video-inspecao" ><Card.Img variant="top" src={VideoInspecao} /></Link>
                                        <Card.Body>
                                            <Card.Title>Vídeo inspeção</Card.Title>
                                            <Card.Text>
                                                Se precisa fazer alguma filmagem em uma rede para inspecioná-la, nos contrate e faremos para você!
                                                </Card.Text>
                                            <button className="saibaMais"><Link to="/video-inspecao">Saiba mais</Link></button>
                                        </Card.Body>
                                    </Card>

                                    <Card className="bg-dark text-white" data-aos="fade-up" data-aos-duration="3000">
                                    <Link to="/desentupimento" ><Card.Img variant="top" src={Desentupimento} /></Link>
                                        <Card.Body>
                                            <Card.Title>Desentupimento</Card.Title>
                                            <Card.Text>
                                                Está com algum problema de entupimento e não sabe como resolver? Nos contrate e resolveremos
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
                            <Location />
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