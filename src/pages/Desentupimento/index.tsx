import React, { useEffect } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import { Divider } from '@material-ui/core';
import MetaTags from 'react-meta-tags';

import Header from '../../components/Header/index';
import Logo from '../../components/Logo/index';
import DesentupimentoCard from '../../components/ServicosCard/Desentupimento/DesentupimentoCard/index';
import Location from '../../components/Location/index';
import WhatsappButton from '../../components/WhatsappButton/index';
import Footer from '../../components/Footer/index';

import HeaderMobile from '../../components/HeaderMobile/index';
import LogoMobile from '../../components/LogoMobile/index';
import DesentupimentoCardMobile from '../../components/ServicosCard/Desentupimento/DesentupimentoMobile/index';
import FooterMobile from '../../components/FooterMobile/index';


AOS.init();

const CacaVazamento = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="wrapper">
                <MetaTags>
                    <title>Minas Leak - desentupimento</title>
                    <meta name="description" content="Prestamos o serviço de desentupimento." />
                    <meta property="og:title" content="Minas Leak - desentupimento" />
                    <meta name="keywords" content="desentupimento,desentupidora em bh mg,desentupidora em bh e regiao,desentupidora em bh centro,desentupidora em barreiro bh,desentupidora bh pampulha,
                        desentupidora bh 24 horas,desentupidora bh venda nova,serviço de desentupidora em bh,desentupidora bh bairro castelo,desentupidora bh barroca,desentupidora bh betim,
                        desentupidora buritis bh,desentupidora bh - caça vazamentos,desentupidora bh concordia,desentupidora caiçara bh,desentupidora castelo bh,desentupidora contorno bh,
                        desentupidora de esgoto em bh,desentupidora de pia em bh,desentupidora de fossa em bh,desentupidora no floresta em bh,desentupidora gutierrez bh,desentupidora jaragua bh,
                        desentupidora bh belo horizonte - mg,desentupidora em venda nova bh,desentupidora no barreiro em bh,desentupidora bh padre eustaquio,desentupidora serra bh"
                    />
                    <meta name="author" content="Minas Leak" />
                    <meta name="goooglebot" content="index,follow" />
                    <meta name="robots" content="index,follow" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="requested_url" content="https://www.minasleak.com.br" />
                    <meta property="og:title" content="Minas Leak - Desentupimento" />
                    <meta property="og:site_name" content="Minas Leak" />
                    <meta property="og:description" content="Prestamos o serviço de desentupimento." />
                    <meta property="og:type" content="website" />
                </MetaTags>
            </div>
            <div className="main-desktop">
                <Header />
                <div className="container">
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Logo />
                    </div>
                    <div className="focus-in-expand divider-logo" data-aos="fade-up" data-aos-duration="2000">
                        <Divider />
                    </div>
                    <DesentupimentoCard />
                    <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="2000">
                        <Divider />
                    </div>
                    <div className="localizacao focus-in-expand" data-aos="fade-up" data-aos-duration="2000">
                        <h2>Nossa localização</h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Location />
                    </div>
                    <div className="focus-in-expand divider-footer" data-aos="fade-up" data-aos-duration="2000">
                        <Divider />
                    </div>
                    <WhatsappButton />
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="main-mobile">
                <HeaderMobile />
                <div className="container">
                    <div className="logo-mobile" data-aos="fade-up" data-aos-duration="2000">
                        <LogoMobile />
                    </div>
                    <div className="focus-in-expand divider-logo" data-aos="fade-up" data-aos-duration="2000">
                        <Divider />
                    </div>
                    <DesentupimentoCardMobile />
                    <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="2000">
                        <Divider />
                    </div>
                    <div className="localizacao focus-in-expand" data-aos="fade-up" data-aos-duration="2000">
                        <h2>Nossa localização</h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Location />
                    </div>
                    <div className="focus-in-expand divider-footer" data-aos="fade-up" data-aos-duration="2000">
                        <Divider />
                    </div>
                    <WhatsappButton />
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <FooterMobile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CacaVazamento;