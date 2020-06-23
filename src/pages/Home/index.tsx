import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header/index';

const Home = () => {
    return (
        <>
           <Header />
           <div>
               <h1>Hello World - Inicio</h1>
           </div>
        </>
    );
}

export default Home;