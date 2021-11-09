import React, { Component } from 'react';
import {connect} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



class fakirmiskinberanda extends Component {
    
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
			slidesToShow: 2,
			slidesToScroll: 1
		  };
		
        return (
            <div className="content-custome">
                <h1>"Bantuan kami fokuskan kepada"</h1>
                <Slider {...settings}>
                <div>
                    <div className="card">
                        <img src="/assets/images/slider3.png" alt="" style={{width:"100%"}} />
                        <div style={{marginTop:"15px"}}>
                            <h2>Nama Penerima</h2>
                            <p style={{marginTop:"-20px",fontSize:"11px"}}><strong>Usia :</strong> 40 <strong>Pekerjaan :</strong> Guru</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="/assets/images/slider3.png" alt="" style={{width:"100%"}} />
                        <div style={{marginTop:"15px"}}>
                            <h2>Nama Penerima</h2>
                            <p style={{marginTop:"-20px",fontSize:"11px"}}><strong>Usia :</strong> 40 <strong>Pekerjaan :</strong> Guru</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="/assets/images/slider3.png" alt="" style={{width:"100%"}} />
                        <div style={{marginTop:"15px"}}>
                            <h2>Nama Penerima</h2>
                            <p style={{marginTop:"-20px",fontSize:"11px"}}><strong>Usia :</strong> 40 <strong>Pekerjaan :</strong> Guru</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="/assets/images/slider3.png" alt="" style={{width:"100%"}} />
                        <div style={{marginTop:"15px"}}>
                            <h2>Nama Penerima</h2>
                            <p style={{marginTop:"-20px",fontSize:"11px"}}><strong>Usia :</strong> 40 <strong>Pekerjaan :</strong> Guru</p>
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
  
  export default connect(mapStatetoprops)(fakirmiskinberanda);