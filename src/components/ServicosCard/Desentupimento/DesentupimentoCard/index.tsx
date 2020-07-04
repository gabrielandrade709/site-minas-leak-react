import React from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import { FaPhone, FaMobileAlt } from 'react-icons/fa';

import './styles.css';
import Image1 from '../../../../assets/Desentupimento/desentupimento1.jpg';
import Image2 from '../../../../assets/Desentupimento/desentupimento2.jpg';
import Image3 from '../../../../assets/Desentupimento/desentupimento3.jpg';


AOS.init();

const DesentupimentoCard = () => {
    return (
        <div className="card-servico focus-in-expand" data-aos="fade-up" data-aos-duration="3000">
            <div className="card-servico-content">
                <div className="direita">
                    <h4>Desentupimento</h4>
                    <p>
                        Desentupimento de <b>caixa de gordura, redes de esgoto, redes pluviais, ralos, caixas de inspeção, plumadas principais, pias e vasos sanitários</b>.
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

export default DesentupimentoCard;