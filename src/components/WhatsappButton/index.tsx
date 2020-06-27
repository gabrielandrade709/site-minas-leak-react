import React from 'react';

import './styles.css';
import fabWhatsapp from '../../assets/fabWhatsapp.png';

const WhatsappButton = () => {
    return (
        <div>
            <a href="https://wa.me/5531991958081" target="_blank ">
                <img src={fabWhatsapp} className="whatsappButton focus-in-expand" data-selector="img " />
            </a>
        </div>
    );
}

export default WhatsappButton;