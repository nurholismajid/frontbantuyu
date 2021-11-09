import React from 'react';
import splashscreen from '../component/splashscreen';
import beranda from '../component/page/beranda/beranda';
import {BrowserRouter, Route} from 'react-router-dom';
function Mainrouter(){
    return(
        <BrowserRouter>
        
             <Route path="/" exact component={splashscreen} />
             <Route path="/beranda" exact component={beranda} />
             

        </BrowserRouter>
    )
}

export default Mainrouter;