import React from 'react';
import AOS from 'aos';
import { Carousel } from 'react-bootstrap';
import { FaPhone, FaMobileAlt } from 'react-icons/fa';

import Image1 from '../../../../assets/Desentupimento/desentupimento1.jpg';
import Image2 from '../../../../assets/Desentupimento/desentupimento2.jpg';
import Image3 from '../../../../assets/Desentupimento/desentupimento3.jpg';


import './styles.css';

AOS.init();

const DesentupimentoCardMobile = () => {
    return (
        <div className="card-mobile focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
            <div className="title-card-mobile">
                <h4>Desentupimento</h4>
            </div>
            <div className="card-carousel-mobile">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image2}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image3}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="card-text-mobile">
                <div className="text-card-mobile text-DesentuCard-mobile">
                    <p>
                        Desentupimento de <b>caixa de gordura, redes de esgoto, redes pluviais, ralos, caixas de inspeção, plumadas principais, pias e vasos sanitários</b>.
                    </p>
                </div>
                <div className="ligar-card-mobile">
                    <button className="numero-card"><a href="tel:{+55-31-3312-1335}"><FaPhone />(31) 3312-1335</a></button>
                    <button className="numero-card card-bottom"><a href="tel:+55-31-99195-8081"><FaMobileAlt />(31) 99195-8081</a></button>
                </div>
            </div>
        </div>
    );
}

export default DesentupimentoCardMobile;