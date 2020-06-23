import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import BombeiroHidraulico from './pages/BombeiroHidraulico';
import CacaVazamento from './pages/CacaVazamento';
import VideoInspecao from './pages/VideoInspecao';
import Desentupimento from './pages/Desentupimento';
import Contato from './pages/Contato';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={BombeiroHidraulico} path="/bombeiro-hidrualico" exact />
            <Route component={CacaVazamento} path="/caca-vazamento" exact />
            <Route component={VideoInspecao} path="/video-inspecao" exact />
            <Route component={Desentupimento} path="/desentupimento" exact />
            <Route component={Contato} path="/contato" exact />
            
        </BrowserRouter>
    )
}

export default Routes;