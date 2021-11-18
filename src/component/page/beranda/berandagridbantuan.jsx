import React, { Component } from 'react';
import {connect} from 'react-redux';
import Slider from "react-slick";


class berandagridbantuan extends Component {
    
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
                <h1>"Bantuan yang sudah kami salurkan"</h1>
            <div className="cards cards--13">
			  <div className="card card--style-thumb">
				  <h4 className="card__title">Makanan</h4>
				  <p className="card__text">20 Kotak</p>
			  </div>
			  <div className="card card--style-thumb">
				  <h4 className="card__title">Uang Tunai</h4>
				  <p className="card__text">Rp 1.200.000,-</p>
			  </div>
			  <div className="card card--style-thumb">
				  <h4 className="card__title">Pakaian</h4>
				  <p className="card__text">250 Setel</p>
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
  
  export default connect(mapStatetoprops)(berandagridbantuan);