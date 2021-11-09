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
               <header className="header header--fixed header--change" >	
			        <div className="header__inner">	
                    <div className="header__logo header__logo--text header__logo--intro"><img className="img-logo" src="/assets/images/logo.png" /></div>	
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