import React, { Component } from 'react';
import {connect} from 'react-redux';
import {link, Link} from 'react-router-dom';
class Splashscreen extends Component {
    
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
            <div className="page page--intro" data-page="intro">
	
	<header className="header header--fixed">	
		<div className="header__inner">	
			<div className="header__logo header__logo--text header__logo--intro"><img className="img-logo" src="/assets/images/logo.png" /></div>	
                </div>
	</header>
	
	
	<div className="swiper-container slider-intro">
		<div className="swiper-wrapper">

			<div className="swiper-slide slider-intro__slide">
				<div className="slider-intro__caption caption">
				<div className="caption__content">
					<div className="caption__image" data-swiper-parallax="-300%" data-swiper-parallax-duration="500"><img src="/assets/images/splash1.png" alt="" title=""/></div>
					<h2 className="caption__title" data-swiper-parallax="-100%" data-swiper-parallax-duration="200">Dari <strong>Kita</strong></h2>
				</div>
				</div>
			</div> 
			<div className="swiper-slide slider-intro__slide">
				<div className="slider-intro__caption caption">
				<div className="caption__content">
					<div className="caption__image" data-swiper-parallax="-300%" data-swiper-parallax-duration="500"><img src="/assets/images/splash3.png" alt="" title=""/></div>
					<h2 className="caption__title" data-swiper-parallax="-100%" data-swiper-parallax-duration="200">Untuk</h2>
				</div>
				</div>
			</div> 
			<div className="swiper-slide slider-intro__slide">
				<div className="slider-intro__caption caption">
				<div className="caption__content">
					<div className="caption__image" data-swiper-parallax="-300%" data-swiper-parallax-duration="500"><img src="/assets/images/splash2.png" alt="" title=""/></div>
					<h2 className="caption__title" data-swiper-parallax="-100%" data-swiper-parallax-duration="200"><strong>Mereka</strong></h2>
				</div>
				</div>
			</div> 
		</div>
		<div className="slider-intro__skip"><div className="text-animation"><Link to="/beranda">Masuk Beranda</Link></div>
        
        <h6 className="caption__title" style={{marginTop:"30px"}} data-swiper-parallax="-100%" data-swiper-parallax-duration="200">powered by <strong>olismix.com</strong></h6>
		
        </div>
        
		<div className="swiper-pagination slider-intro__pagination"></div>
		<div className="swiper-button-prev slider-intro__prev d-none"></div>
		<div className="swiper-button-next slider-intro__next d-none"></div>	
	</div>
			  



</div>
        );
    }
}

const mapStatetoprops=(state)=>{
    return{
      banner:state.datahome
    }
  }
  
  export default connect(mapStatetoprops)(Splashscreen);