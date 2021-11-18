import React, { Component } from 'react';
import {connect} from 'react-redux';
import {link, Link} from 'react-router-dom';
class bottomnavbar extends Component {
    
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
            <div className="bottom-navigation">
	 <div className="swiper-container-toolbar swiper-toolbar">
		<div className="bottom-navigation__pagination"></div>
		<div className="swiper-wrapper">
		  <div className="swiper-slide">
			<ul className="bottom-navigation__icons">
			<li><Link to="/beranda"><img src="/assets/images/icons/blue/home.svg" alt="" title="" /><span>Beranda</span></Link></li>
			<li><Link to="/donatur"><img src="/assets/images/icons/blue/user.svg" alt="" title="" /><span>Donatur</span></Link></li>
			<li><Link to="/kontak"><img src="/assets/images/icons/blue/contact.svg" alt="" title="" /><span>Kontak</span></Link></li>
			</ul>
		  </div> 
		</div>
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
  
  export default connect(mapStatetoprops)(bottomnavbar);