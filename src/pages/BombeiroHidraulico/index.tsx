import React, { useEffect } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import MetaTags from 'react-meta-tags';
import { Divider } from '@material-ui/core';

import Header from '../../components/Header/index';
import Logo from '../../components/Logo/index';
import BombeiroCard from '../../components/ServicosCard/BombeiroHidraulico/BombeiroCard/index';
import Location from '../../components/Location/index';
import WhatsappButton from '../../components/WhatsappButton/index';
import Footer from '../../components/Footer/index';

import HeaderMobile from '../../components/HeaderMobile/index';
import LogoMobile from '../../components/LogoMobile/index';
import BombeiroCardMobile from '../../components/ServicosCard/BombeiroHidraulico/BombeiroCardMobile/';
import FooterMobile from '../../components/FooterMobile/index';


AOS.init();


const BombeiroHidrualico = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="wrapper">
                <MetaTags>
                    <title>Minas Leak - bombeiro hidráulico</title>
                    <meta name="description" content="Bombeiro hidráulico 24 horas" />
                    <meta property="og:title" content="Minas Leak - Bombeiro Hidráulico" />
                    <meta name="keywords" content="bombeiro hidráulico contagem,bombeiro hidráulico bh padre eustáquio,bombeiro hidráulico bh floresta,bombeiro hidráulico belo horizonte,
                        bombeiro hidraulico caiçara bh,bombeiro hidraulico dona clara bh,bombeiro hidráulico em contagem,bombeiro hidráulico em betim,bombeiro hidráulico em belo horizonte,
                        eletricista e bombeiro hidráulico,eletricista e bombeiro hidráulico (sos reparos),bombeiro hidráulico e caça vazamento belo horizonte,bombeiro hidraulico e eletricista,
                        bombeiro hidraulico 24 horas bh,bombeiro hidraulico belo horizonte,bombeiro hidraulico lagoa santa,bombeiro hidraulico nova lima,bombeiro hidráulico ou encanador,
                        bombeiro hidráulico telefone,bombeiro hidraulico bh 24 horas,bombeiro hidraulico bh pampulha,bombeiro hidraulico bh padre eustaquio,bombeiro hidraulico bh santa efigenia,
                        bombeiro hidraulico bh floresta,bombeiro hidraulico bh savassi,bombeiro hidraulico bh anchieta,bombeiro hidraulico santa amelia bh,bombeiro hidraulico bh alipio de melo,
                        bombeiro hidraulico bh santo antonio,bombeiro hidraulico bh jardim america,serviço de bombeiro hidraulico em bh,bombeiro hidraulico bh buritis,bombeiro hidraulico bh boa vista,
                        bombeiro hidraulico bh betania,bombeiro hidraulico barreiro bh,bombeiro hidraulico bairro buritis bh,bombeiro hidraulico bh castelo,bombeiro hidraulico bh cidade nova,
                        bombeiro hidraulico bh carlos prates,bombeiro hidraulico bh cachoeirinha,bombeiro hidraulico centro bh,bombeiro hidraulico caiçara bh,bombeiro hidraulico bairro castelo bh,
                        bombeiro hidraulico dona clara bh,bombeiro hidraulico bh dona clara,bombeiro hidraulico bh floramar,bombeiro hidraulico sagrada familia bh,bombeiro hidraulico bairro floresta bh,
                        bombeiro hidraulico gutierrez bh,bombeiro hidráulico bh mg,bombeiro hidráulico bh belo horizonte - mg,bombeiro hidráulico santa monica bh,bombeiro hidraulico bh nova suica,
                        bombeiro hidraulico bh nova suissa,bombeiro hidraulico em venda nova bh,bombeiro hidraulico cidade nova bh,bombeiro hidraulico bh planalto,bombeiro hidraulico bh palmares,
                        bombeiro hidraulico prado bh,bombeiro hidraulico predial bh,bombeiro hidraulico bairro planalto bh,bombeiro hidraulico bh sagrada familia,bombeiro hidraulico bh santa monica,
                        bombeiro hidraulico bh santa amelia,bombeiro hidraulico bh santa tereza,bombeiro hidraulico bh serra,bombeiro hidraulico santa tereza bh,bombeiro hidraulico bh venda nova,
                        bombeiro hidraulico boa vista bh"
                    />
                    <meta name="author" content="Minas Leak" />
                    <meta name="goooglebot" content="index,follow" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="requested_url" content="https://www.minasleak.com.br" />
                    <meta property="og:title" content="Minas Leak - bombeiro hidráulico" />
                    <meta property="og:site_name" content="Minas Leak" />
                    <meta property="og:description" content="Bombeiro hidráulico 24 horas" />
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
                    <BombeiroCard />
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
                    <BombeiroCardMobile />
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

export default BombeiroHidrualico;