import React, { Component } from 'react';
import {connect} from 'react-redux';
import Topcomponet from '../../topcomponet';
import Bottomcomponet from '../../bottomcomponet';
import Header from '../../header';
import Sliderberanda from './sliderberanda';
import Introberanda from './introberanda';
import Fakirmiskinberanda from './fakirmiskinberanda';
import Artikelberanda from './artikelberanda';
import Dokumentasiberanda from './dokumentasiberanda';
import Berandagridbantuan from './berandagridbantuan';
class Beranda extends Component {
    
    render() {
        // const banners = this.props.banner;
      
        //  const loopbanner = banners.map(banner=>{
        //     return(
        //     <div key={banner.id} className="col-12 col-md-4">
        //                 <div className="card-img">
        //                     <a href={banner.Link}>
        //                         <img src={baseurl+banner.Image.url} width="100%" alt="" />
        //                     </a>
        //                 </div>
        //             </div>
        //       )
        //     })

        return (
            <div>
                <Topcomponet />
                <div className="page page--main" data-page="main">
                		<Header />

                <div className="page__content page__content--with-header page__content--with-bottom-nav">
						<Sliderberanda />
                        <Introberanda />
                        <Berandagridbantuan />
						<Fakirmiskinberanda />
                        <Dokumentasiberanda />
						<Artikelberanda />
                        <div style={{minHeight:"75px"}}></div>
					</div>
				</div>
                <Bottomcomponet />
            </div>
        );
    }
}

const mapStatetoprops=(state)=>{
    return{
      banner:state.datahome
    }
  }
  
  export default connect(mapStatetoprops)(Beranda);