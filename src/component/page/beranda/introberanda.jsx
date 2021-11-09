import React, { Component } from 'react';
import {connect} from 'react-redux';
import Slider from "react-slick";


class introberanda extends Component {
    
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
        const styleimage = {
            width:"80%",
            marginLeft:"10%"
        }
		
        return (
            <div className="content-custome">
                <img style={styleimage} src="/assets/images/splash2.png" alt="" />
                <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h4>
		    </div>
        );
    }
}

const mapStatetoprops=(state)=>{
    return{
      banner:state.datahome
    }
  }
  
  export default connect(mapStatetoprops)(introberanda);