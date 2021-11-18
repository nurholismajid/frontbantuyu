import React, { Component } from 'react';
import {connect} from 'react-redux';
import Bottomcomponet from '../../bottomcomponet';
import Subheader from '../../subheader';
class Donatur extends Component {
    
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
                <div className="page page--main" data-page="main" style={{transform:"translate3d(0, 0, 0)"}}>
                		<Subheader />

                <div className="page__content page__content--with-header page__content--with-bottom-nav">
                        <h1>Donatur Page</h1>
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
  
  export default connect(mapStatetoprops)(Donatur);