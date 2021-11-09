import React, { Component } from 'react';
import {connect} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



class artikelberanda extends Component {
    
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
            <div className="content-custome">
                <h1>"Informasi Terkini"</h1>
                <Slider {...settings}>
                <div>
                    <div className="card">
                        <img src="/assets/images/slider1.png" alt="" style={{width:"100%"}} />
                        <div style={{marginTop:"15px"}}>
                            <h4>Contoh Artikel</h4>
                            <p style={{marginTop:"-20px",fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="/assets/images/slider1.png" alt="" style={{width:"100%"}} />
                        <div style={{marginTop:"15px"}}>
                            <h4>Contoh Artikel</h4>
                            <p style={{marginTop:"-20px",fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="/assets/images/slider1.png" alt="" style={{width:"100%"}} />
                        <div style={{marginTop:"15px"}}>
                            <h4>Contoh Artikel</h4>
                            <p style={{marginTop:"-20px",fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="/assets/images/slider1.png" alt="" style={{width:"100%"}} />
                        <div style={{marginTop:"15px"}}>
                            <h4>Contoh Artikel</h4>
                            <p style={{marginTop:"-20px",fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
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
  
  export default connect(mapStatetoprops)(artikelberanda);