import React from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import { FaPhone, FaMobileAlt } from 'react-icons/fa';

import './styles.css';
import Image1 from '../../../../assets/BombeiroHidraulico/hidraulico.png';
import Image2 from '../../../../assets/BombeiroHidraulico/hidraulico2.png';
import Image3 from '../../../../assets/BombeiroHidraulico/hidraulico3.png';
import Image4 from '../../../../assets/BombeiroHidraulico/hidraulico4.png';
import Image5 from '../../../../assets/BombeiroHidraulico/hidraulico5.png';
import Image6 from '../../../../assets/BombeiroHidraulico/hidraulico6.png';

AOS.init();

const BombeiroCard = () => {
    return (
        <div className="card-servico focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
                    <div className="card-servico-content">
                        <div className="direita">
                            <h4>Bombeiro hidráulico</h4>
                            <p>
                                A <b>Minas Leak</b> é especializada na prestação dos seguintes serviços:
                            </p>
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

export default BombeiroCard;