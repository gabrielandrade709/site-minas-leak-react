import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import MetaTags from 'react-meta-tags';

import { Divider } from '@material-ui/core';

import Header from '../../components/Header/index';
import Logo from '../../components/Logo/index'
import FormContato from '../../components/FormContato/index';
import Location from '../../components/Location/index';
import WhatsappButton from '../../components/WhatsappButton/index';
import Footer from '../../components/Footer/index';

import HeaderMobile from '../../components/HeaderMobile/index';
import LogoMobile from '../../components/LogoMobile/index';
import FormContatoMobile from '../../components/FormContatoMobile/index';
import FooterMobile from '../../components/FooterMobile/index';

AOS.init();

const Contato = () => {
    return (
        <>
            <div className="wrapper">
                <MetaTags>
                    <title>Minas Leak - contato</title>
                    <meta name="description" content="Prestamos os serviços de bombeiro hidráulico, caça vazamento, vídeo inspeção e desentupimento." />
                    <meta property="og:title" content="Minas Leak - contato" />
                    <meta name="keywords" content="caça vazamento,bombeiro hidráulico,vídeo inspeção,desentupimento,bombeiro hidráulico em bh,caça vazamento em bh,localização de vazamento" />
                    <meta name="author" content="Minas Leak" />
                    <meta name="goooglebot" content="index,follow" />
                    <meta name="robots" content="index,follow" />
                    <meta name="requested_url" content="https://www.minasleak.com.br" />
                    <meta property="og:title" content="Minas Leak" />
                    <meta property="og:site_name" content="Minas Leak" />
                    <meta property="og:description" content="Prestamos os serviços de bombeiro hidráulico, caça vazamento, vídeo inspeção e desentupimento." />
                    <meta property="og:type" content="website" />
                </MetaTags>
            </div>
            <div className="main-desktop">

                <Header />
                <div className="conteudo">
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <Logo />
                    </div>
                    <div className="focus-in-expand top-form-divider" data-aos="fade-up" data-aos-duration="3000">
                        <Divider />
                    </div>
                    <div className="form-contato focus-in-expand " data-aos="fade-up" data-aos-duration="3000">
                        <div className="title-form">
                            <h1>Solicitar orçamento</h1>
                        </div>
                        <FormContato />
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
            <div className="main-mobile">
                <HeaderMobile />
                <div className="container">
                    <div className="logo-mobile" data-aos="fade-up" data-aos-duration="3000">
                        <LogoMobile />
                    </div>
                    <div className="focus-in-expand top-form-divider" data-aos="fade-up" data-aos-duration="3000">
                        <Divider />
                    </div>
                    <div className="form-contato-mobile focus-in-expand " data-aos="fade-up" data-aos-duration="3000">
                        <div className="title-form">
                            <h3>Solicitar orçamento</h3>
                        </div>
                        <FormContatoMobile />
                    </div>
                    <div className="focus-in-expand divider-bottom-form" data-aos="fade-up" data-aos-duration="3000">
                        <Divider />
                    </div>
                    <div className="localizacao focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                        <h2>Nossa localização</h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <Location />
                    </div>
                    <div className="focus-in-expand divider-footer" data-aos="fade-up" data-aos-duration="3000">
                        <Divider />
                    </div>
                    <WhatsappButton />
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <FooterMobile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contato;