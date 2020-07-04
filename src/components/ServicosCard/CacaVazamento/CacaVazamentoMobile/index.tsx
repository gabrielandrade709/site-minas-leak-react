import React from 'react';
import AOS from 'aos';
import { Carousel } from 'react-bootstrap';
import { FaPhone, FaMobileAlt } from 'react-icons/fa';

import Image1 from '../../../../assets/CacaVazamento/cacaVazamento.png';
import Image2 from '../../../../assets/CacaVazamento/cacaVazamento1.png';
import Image3 from '../../../../assets/CacaVazamento/cacaVazamento2.png';
import Image4 from '../../../../assets/CacaVazamento/cacaVazamento3.png';
import Image5 from '../../../../assets/CacaVazamento/cacaVazamento4.png';
import Image6 from '../../../../assets/CacaVazamento/cacaVazamento5.png';


import './styles.css';

AOS.init();

const CacaCardMobile = () => {
    return (
        <div className="card-mobile focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
            <div className="title-card-mobile">
                <h4>Caça vazamento</h4>
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
                <div className="text-card-mobile text-CacaCard-mobile">
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
                <div className="ligar-card-mobile">
                    <button className="numero-card"><a href="tel:{+55-31-3312-1335}"><FaPhone />(31) 3312-1335</a></button>
                    <button className="numero-card card-bottom"><a href="tel:+55-31-99195-8081"><FaMobileAlt />(31) 99195-8081</a></button>
                </div>
            </div>
        </div>
    );
}

export default CacaCardMobile;