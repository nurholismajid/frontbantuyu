import React, { Component } from 'react';
import {connect} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class sliderberanda extends Component {
    
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

		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		  };

        return (
            <div>
        	<Slider {...settings}>
                <div>
                    <img src="/assets/images/slider1.png" alt="" style={{width:"100%"}} />
                    <div className="overlayslider"></div>
                </div>
                <div>
                    <img src="/assets/images/slider2.png" alt="" style={{width:"100%"}} />
                    <div className="overlayslider"></div>
                </div>
                <div>
                    <img src="/assets/images/slider3.png" alt="" style={{width:"100%"}} />
                    <div className="overlayslider"></div>
                </div>
            </Slider>				
		    </div>
        );
    }
}

const mapStatetoprops=(state)=>{
    return{
      banner:state.datahome
    }
  }
  
  export default connect(mapStatetoprops)(sliderberanda);