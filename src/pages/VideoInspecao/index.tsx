import React, { useEffect } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import { Divider } from '@material-ui/core';
import MetaTags from 'react-meta-tags';

import Header from '../../components/Header/index';
import Logo from '../../components/Logo/index';
import VideoInspecaoCard from '../../components/ServicosCard/VideoInspecao/VideoInspecaoCard/index';
import Location from '../../components/Location/index';
import WhatsappButton from '../../components/WhatsappButton/index';
import Footer from '../../components/Footer/index';

import HeaderMobile from '../../components/HeaderMobile/index';
import LogoMobile from '../../components/LogoMobile/index';
import VideoInspecaoCardMobile from '../../components/ServicosCard/VideoInspecao/VideoInspecaoMobile/index';
import FooterMobile from '../../components/FooterMobile/index';


AOS.init();

const VideoInspecao = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="wrapper">
                <MetaTags>
                    <title>Minas Leak - vídeo inspeção</title>
                    <meta name="description" content="Prestamos o serviço de vídeo inspeção." />
                    <meta property="og:title" content="Minas Leak - vídeo inspeção" />
                    <meta name="keywords" content="vídeo inspeção,video inspeção de tubulação de esgoto,video inspeção de tubulação,video inspeção robotizada,video inspeção de esgoto,
                        video inspeção de tubulações,inspeção video de tubagens,serviço de video inspeção,video inspeção esgoto,vídeo inspeção robotizada"
                    />
                    <meta name="author" content="Minas Leak" />
                    <meta name="goooglebot" content="index,follow" />
                    <meta name="robots" content="index,follow" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="requested_url" content="https://www.minasleak.com.br" />
                    <meta property="og:title" content="Minas Leak - vídeo inspeção" />
                    <meta property="og:site_name" content="Minas Leak" />
                    <meta property="og:description" content="Prestamos o serviço de vídeo inspeção." />
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
                    <VideoInspecaoCard />
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
                    <VideoInspecaoCardMobile />
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

export default VideoInspecao;