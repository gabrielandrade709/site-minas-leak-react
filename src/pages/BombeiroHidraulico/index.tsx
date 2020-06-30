import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import { Divider } from '@material-ui/core';

import Header from '../../components/Header/index';
import Logo from '../../components/Logo/index';
import BombeiroCard from '../../components/ServicosCard/BombeiroCard/index';
import Location from '../../components/Location/index';
import WhatsappButton from '../../components/WhatsappButton/index';
import Footer from '../../components/Footer/index';


AOS.init();

const BombeiroHidrualico = () => {
    return (
        <>
           <div className = "main-desktop">
           <Header />
           <div className="container">
               <div data-aos="fade-up" data-aos-duration="3000">
                    <Logo />
                </div>
                <div className="focus-in-expand divider-logo" data-aos="fade-up" data-aos-duration="3000">
                    <Divider />
                </div>
                <BombeiroCard />
                <div className="focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                    <Divider />
                </div>
                <div className="localizacao focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                    <h2>Nossa localização</h2>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <Location/>
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
        </>
    );
}

export default BombeiroHidrualico;