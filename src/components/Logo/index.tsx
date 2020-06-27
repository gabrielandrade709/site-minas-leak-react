import React from 'react';
import { WhatsApp } from '@material-ui/icons';
import './styles.css';


import Logotipo from '../../assets/logotipo.png';

const Logo = () => {
    return (
        <>
            <div className="logo focus-in-expand">
                <img src={Logotipo} />
            </div>
            <div className="center focus-in-expand">
                <p className="ligar"><a  className="ligar" href="tel:{+55-31-3312-1335}">(31) 3312-1335</a> | <a className="ligar" href="tel:+55-31-99195-8081">(31) 99195-8081</a></p>
            </div>
        </>

    );
}

export default Logo;