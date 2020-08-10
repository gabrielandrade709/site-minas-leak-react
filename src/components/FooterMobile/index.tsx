import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import { FaPhone, FaMobileAlt, FaEnvelope, FaInstagram } from 'react-icons/fa'
import './styles.css';

const FooterMobile = () => {
    return (
        <div className="footer">
            <div className="container text-md-left mt-5 focus-in-expand">

                <div className="row mt-3 ">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">

                        <h6 className="text-uppercase font-weight-bold centeredText">Quem somos</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto " />
                        <p>A <b>Minas Leak</b> conta com uma equipe técnica especializada com mais de 15
                            anos de experiência no mercado, e o nosso principal foco é o compromisso com os nossos clientes
                            e total garantia de todos os serviços prestados,
                            prezando sempre o bem-estar e comodidade dos nossos clientes.</p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 centeredText nossosServicos">

                        <h6 className="text-uppercase font-weight-bold ">Nossos serviços</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto " />
                        <p> <a><Link to="/bombeiro-hidraulico">Bombeiro hidráulica</Link></a> </p>
                        <p> <a><Link to="/caca-vazamento">Caça vazamento</Link></a> </p>
                        <p> <a><Link to="/video-inspecao">Vídeo inspeção</Link></a> </p>
                        <p> <a><Link to="/desentupimento">Desentupimento</Link></a> </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 centeredText contato">

                        <h6 className="text-uppercase font-weight-bold ">Contato</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto " />
                        <p><a href="tel:+55-31-3312-1335 "><FaPhone className="iconFooter" />(31) 3312-1335</a></p>
                        <p><a href="tel:+55-31-99195-8081 "><FaMobileAlt className="iconFooter" />(31) 99195-8081</a></p>
                        <p><a href="mailto:contato@minasleak.com.br "><FaEnvelope className="iconFooter" />contato@minasleak.com.br</a></p>
                        <p><a href="https://www.instagram.com/minasleak/?hl=pt-br " target="_blank "><FaInstagram className="iconFooter" />@minasleak</a></p>
                    </div>

                </div>
                <Divider />
                <div className="copyright">
                    <a > &copy; {new Date().getFullYear()} Copyright: Minas Leak </a>
                </div>
            </div>
        </div>
    );
}

export default FooterMobile;