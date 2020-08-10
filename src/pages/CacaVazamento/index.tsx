import React, { useEffect } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import { Divider } from '@material-ui/core';
import MetaTags from 'react-meta-tags';

import Header from '../../components/Header/index';
import Logo from '../../components/Logo/index';
import CacaVazamentoCard from '../../components/ServicosCard/CacaVazamento/CacaVazamentoCard/index';
import Location from '../../components/Location/index';
import WhatsappButton from '../../components/WhatsappButton/index';
import Footer from '../../components/Footer/index';

import HeaderMobile from '../../components/HeaderMobile/index';
import LogoMobile from '../../components/LogoMobile/index';
import CacaCardMobile from '../../components/ServicosCard/CacaVazamento/CacaVazamentoMobile/index';
import FooterMobile from '../../components/FooterMobile/index';


AOS.init();

const Desentupimento = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="wrapper">
                <MetaTags>
                    <title>Minas Leak - caça vazamento</title>
                    <meta name="description" content="Prestamos serviços de caça vazamentos e infiltrações." />
                    <meta property="og:title" content="Minas Leak - caça vazamento" />
                    <meta name="keywords" content="caça vazamento,caça vazamentos bh,caça vazamentos de agua,caça vazamento bh,caça vazamento contagem,caça vazamento agua,caça vazamento apartamento,
                        caça vazamento agua fria,caçadores de vazamento,caça vazamento de agua,caça vazamento de esgoto,caça vazamento com aparelho,empresa de caça vazamento,serviço de caça vazamento,
                        telefone de caça vazamento,caça vazamento em residência,caça vazamento em apartamento,desentupidora e caça vazamento,encanador e caça vazamentos,
                        bombeiro hidráulico e caça vazamento belo horizonte,caça vazamento e infiltração,caça vazamentos e desentupidora,caça vazamentos e desentupidora site,caça vazamento e reparos,
                        caça vazamento geofone,caça vazamento hidrante,caça vazamento hidráulica,caça vazamento hidrômetro,caça vazamento infiltração,empresa que caça vazamento,caça vazamento residencial,
                        caça vazamento telefone,caça vazamento com raio x,caça vazamento zona sul,caça vazamento de agua em bh,empresa de caça vazamentos em bh,caça vazamentos de agua bh"
                    />
                    <meta name="author" content="Minas Leak" />
                    <meta name="goooglebot" content="index,follow" />
                    <meta name="robots" content="index,follow" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="requested_url" content="https://www.minasleak.com.br" />
                    <meta property="og:title" content="Minas Leak - caça vazamento" />
                    <meta property="og:site_name" content="Minas Leak" />
                    <meta property="og:description" content="Prestamos serviços de caça vazamentos e infiltrações." />
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
                    <CacaVazamentoCard />
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
                    <CacaCardMobile />
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

export default Desentupimento;