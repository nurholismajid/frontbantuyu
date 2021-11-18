import React from 'react';
import splashscreen from '../component/splashscreen';
import beranda from '../component/page/beranda/beranda';
import tentangkami from '../component/page/tentangkami/tentangkami';
import yangdibantu from '../component/page/yangdibantu/yangdibantu';
import laporandonasi from '../component/page/laporandonasi/laporandonasi';
import artikel from '../component/page/artikel/artikel';
import dokumentasi from '../component/page/dokumentasi/dokumentasi';
import donatur from '../component/page/donatur/donatur';
import kontak from '../component/page/kontak/kontak';
import {BrowserRouter, Route} from 'react-router-dom';
function Mainrouter(){
    return(
        <BrowserRouter>
        
             <Route path="/" exact component={splashscreen} />
             <Route path="/beranda" exact component={beranda} />
             <Route path="/tentangkami" exact component={tentangkami} />
             <Route path="/yangdibantu" exact component={yangdibantu} />
             <Route path="/laporandonasi" exact component={laporandonasi} />
             <Route path="/dokumentasi" exact component={dokumentasi} />
             <Route path="/artikel" exact component={artikel} />
             <Route path="/donatur" exact component={donatur} />
             <Route path="/kontak" exact component={kontak} />
             

        </BrowserRouter>
    )
}

export default Mainrouter;