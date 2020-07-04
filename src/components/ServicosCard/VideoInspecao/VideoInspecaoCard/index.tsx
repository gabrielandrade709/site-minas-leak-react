import React from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import { FaPhone, FaMobileAlt } from 'react-icons/fa';

import './styles.css';
import Image1 from '../../../../assets/VideoInspecao/videoInspecaoCarousel1.jpg';
import Image2 from '../../../../assets/VideoInspecao/videoInspecaoCarousel2.jpg';
import Image3 from '../../../../assets/VideoInspecao/videoInspecaoCarousel3.jpg';
import Image4 from '../../../../assets/VideoInspecao/videoInspecaoCarousel4.jpg';
import Image5 from '../../../../assets/VideoInspecao/videoInspecaoCarousel5.jpg';
import Image6 from '../../../../assets/VideoInspecao/videoInspecaoCarousel6.jpg';


AOS.init();

const VideoInspecaoCard = () => {
    return (
        <div className="card-servico focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
            <div className="card-servico-content">
                <div className="direita">
                    <h4>Vídeo Inspeção</h4>
                    <p>
                        Trabalhamos com câmeras robotizadas e
                        manuais que permitem a visualização das condições
                        internas
                        dos trechos inspecionados. Dessa forma, é possível verificar a existência de trincas,
                        rompimentos, obstruções, ligações irregulares, etc.
                    </p>
                </div>
                <div className="esquerda">
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
                    <div className="ligar-card">
                        <button className="numero-card"><a href="tel:{+55-31-3312-1335}"><FaPhone />(31) 3312-1335</a></button>
                        <button className="numero-card"><a href="tel:+55-31-99195-8081"><FaMobileAlt />(31) 99195-8081</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoInspecaoCard;