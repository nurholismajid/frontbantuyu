import React, { Component } from 'react';
import {connect} from 'react-redux';
import {link, Link} from 'react-router-dom';
class panelleft extends Component {
    
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
               <div className="panel panel--left">
                 <div className="panel__navigation">
                    <div className="swiper-wrapper">
			<div className="swiper-slide">
				<div className="user-details">
					<div className="user-details__thumb"><img src="assets/images/photos/image-21.jpg" alt="" title=""/></div>
					<div className="user-details__title"><span>Hello</span> Samantha Joy</div>
				</div>
				<nav className="main-nav">
					<ul>
						<li><Link className="linkmenu" to="/beranda"><img src="assets/images/icons/blue/home.svg" alt="" title="" /><span>Beranda</span></Link></li>
						<li><Link className="linkmenu" to="/tentangkami"><img src="assets/images/icons/blue/home.svg" alt="" title="" /><span>Tentang Kami</span></Link></li>
						<li><Link className="linkmenu" to="/yangdibantu"><img src="assets/images/icons/blue/home.svg" alt="" title="" /><span>Yang harus dibantu</span></Link></li>
						<li><Link className="linkmenu" to="/laporandonasi"><img src="assets/images/icons/blue/home.svg" alt="" title="" /><span>Laporan Donasi</span></Link></li>
						<li><Link className="linkmenu" to="/dokumentasi"><img src="assets/images/icons/blue/home.svg" alt="" title="" /><span>Dokumentasi</span></Link></li>
						<li><Link className="linkmenu" to="/artikel"><img src="assets/images/icons/blue/home.svg" alt="" title="" /><span>Artikel</span></Link></li>
					</ul>
				</nav>
			</div>	
			
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
  
  export default connect(mapStatetoprops)(panelleft);