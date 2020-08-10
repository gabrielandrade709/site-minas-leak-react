import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Logotipo from '../../assets/logotipo.png';

const LogoMobile = () => {
    return (
        <>
            <div className="logo focus-in-expand">
            <Link to="/" ><img src={Logotipo} /></ Link>
            </div>
            <div className="center focus-in-expand">
                <p className="ligar">
                    <a  className="ligar" href="tel:{+55-31-3312-1335}">(31) 3312-1335</a> | 
                    <a className="ligar" href="tel:+55-31-99195-8081"> (31) 99195-8081</a>
                </p>
            </div>
        </>

    );
}

export default LogoMobile;