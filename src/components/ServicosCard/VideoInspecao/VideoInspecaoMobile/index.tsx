import React from 'react';
import AOS from 'aos';
import { Carousel } from 'react-bootstrap';
import { FaPhone, FaMobileAlt } from 'react-icons/fa';

import Image1 from '../../../../assets/VideoInspecao/videoInspecaoCarousel1.png';
import Image2 from '../../../../assets/VideoInspecao/videoInspecaoCarousel2.png';
import Image3 from '../../../../assets/VideoInspecao/videoInspecaoCarousel3.png';
import Image4 from '../../../../assets/VideoInspecao/videoInspecaoCarousel4.png';
import Image5 from '../../../../assets/VideoInspecao/videoInspecaoCarousel5.png';
import Image6 from '../../../../assets/VideoInspecao/videoInspecaoCarousel6.png';

import './styles.css';

AOS.init();

const VideoInspecaoCardMobile = () => {
    return (
        <div className="card-mobile focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
            <div className="title-card-mobile">
                <h4>Vídeo Inspeção</h4>
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
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image4}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image5}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image6}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="card-text-mobile">
                <div className="text-card-mobile text-VideoCard-mobile">
                    <p>
                        Trabalhamos com câmeras robotizadas e
                        manuais que permitem a visualização das condições
                        internas
                        dos trechos inspecionados. Dessa forma, é possível verificar a existência de trincas,
                        rompimentos, obstruções, ligações irregulares, etc.
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

export default VideoInspecaoCardMobile;