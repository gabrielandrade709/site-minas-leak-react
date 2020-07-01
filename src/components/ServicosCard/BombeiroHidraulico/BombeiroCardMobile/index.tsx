import React from 'react';
import AOS from 'aos';
import { Carousel } from 'react-bootstrap';
import { FaPhone, FaMobileAlt } from 'react-icons/fa';

import Image1 from '../../../../assets/BombeiroHidraulico/hidraulico.png';
import Image2 from '../../../../assets/BombeiroHidraulico/hidraulico2.png';
import Image3 from '../../../../assets/BombeiroHidraulico/hidraulico3.png';
import Image4 from '../../../../assets/BombeiroHidraulico/hidraulico4.png';
import Image5 from '../../../../assets/BombeiroHidraulico/hidraulico5.png';
import Image6 from '../../../../assets/BombeiroHidraulico/hidraulico6.png';

import './styles.css';

AOS.init();

const BombeiroCardMobile = () => {
    return (
        <div className="card-mobile focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
            <div className="title-card-mobile">
                <h4>Bombeiro hidráulico</h4>
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
                <div className="text-card-mobile">
                    <p>A <b>Minas Leak</b> é especializada na prestação dos seguintes serviços:</p>
                    <ul>
                        <li>Conserto de todas as marcas e modelos de torneiras, chuveiros e duchas higiênicas;</li>
                        <p></p>
                        <li>Conserto de todas as marcas e modelos de válvulas de descarga;</li>
                        <p></p>
                        <li>Conserto de todas as marcas e modelos de registros;</li>
                        <p></p>
                        <li>Troca de sifão;</li>
                        <p></p>
                        <li>Troca de ligação flexível (rabicho);</li>
                        <p></p>
                        <li>Conserto em tubulações de <b>PVC, Cobre, PPR, PEX e Ferro Galvanizado</b>;</li>
                        <p></p>
                        <li>Reforma de esgoto em geral.</li>
                    </ul>
                </div>
                <div className="ligar-card-mobile">
                    <button className="numero-card"><a href="tel:{+55-31-3312-1335}"><FaPhone />(31) 3312-1335</a></button>
                    <button className="numero-card card-bottom"><a href="tel:+55-31-99195-8081"><FaMobileAlt />(31) 99195-8081</a></button>
                </div>
            </div>
        </div>
    );
}

export default BombeiroCardMobile;