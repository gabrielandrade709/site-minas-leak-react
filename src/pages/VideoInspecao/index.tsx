import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import { Divider } from '@material-ui/core';

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
    return (
        <>
            <div className="main-desktop">
                <Header />
                <div className="container">
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <Logo />
                    </div>
                    <div className="focus-in-expand divider-logo" data-aos="fade-up" data-aos-duration="3000">
                        <Divider />
                    </div>
                    <VideoInspecaoCard />
                    <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
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
                    <div className="focus-in-expand divider-logo" data-aos="fade-up" data-aos-duration="3000">
                        <Divider />
                    </div>
                    <VideoInspecaoCardMobile />
                    <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
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

export default VideoInspecao;