import React from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import { FaPhone, FaMobileAlt } from 'react-icons/fa';

import './styles.css';
import Image1 from '../../../../assets/CacaVazamento/cacaVazamento.jpg';
import Image2 from '../../../../assets/CacaVazamento/cacaVazamento1.jpg';
import Image3 from '../../../../assets/CacaVazamento/cacaVazamento2.jpg';
import Image4 from '../../../../assets/CacaVazamento/cacaVazamento3.jpg';
import Image5 from '../../../../assets/CacaVazamento/cacaVazamento4.jpg';
import Image6 from '../../../../assets/CacaVazamento/cacaVazamento5.jpg';
import Image7 from '../../../../assets/CacaVazamento/cacaVazamento6.jpg';
import Image8 from '../../../../assets/CacaVazamento/cacaVazamento7.jpg';


AOS.init();

const CacaVazamentoCard = () => {
    return (
        <div className="card-servico focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
            <div className="card-servico-content">
                <div className="direita">
                    <h4>Caça vazamento</h4>
                        <p>
                            A <b>Minas Leak</b> é uma empresa especializada em localização de vazamentos e infiltrações.
                        </p>
                        <p> 
                            Os problemas de vazamento de água e infiltração ocorrem em
                            praticamente todo tipo de
                            residências,
                            estabelecimentos comerciais e indústrias, acarretando grandes prejuízos para os
                            proprietários e
                            o meio ambiente. Pensando nisso, a <b>Minas Leak</b> conta
                            com profissionais treinados e equipamentos modernos para resolver quaisquer problemas
                            relacionados a vazamentos de água e infiltrações.
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
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image7}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image8}
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

export default CacaVazamentoCard;