import React, { Component } from 'react';
import {connect} from 'react-redux';
class Header extends Component {

    
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
                <header class="header header--page header--fixed">	
		            <div class="header__inner">	
			            <div class="header__icon header__icon--menu open-panel" data-panel="left"><span></span><span></span><span></span><span></span><span></span><span></span></div>
			            <div class="header__logo header__logo--text"><img className="img-logo" src="/assets/images/logo.png" /></div>	
			            <div class="header__icon open-panel" data-panel="right"><img src="/assets/images/icons/white/search.svg" alt="" title=""/></div>
                    </div>
	            </header>
                 
            </div>
        );
    }
}

const mapStatetoprops=(state)=>{
    return{
      banner:state.datahome
    }
  }
  
  export default connect(mapStatetoprops)(Header);