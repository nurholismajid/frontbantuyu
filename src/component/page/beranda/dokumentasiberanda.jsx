import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
class dokumentasiberanda extends Component  {

  constructor(props) {
    super(props);

    this.state = { windowWidth: window.innerWidth };

    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
    
  }
   handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };

   openModal (idyoutube) {
    this.setState({
      isOpen: true,
      idyoutube:idyoutube
    })
  }
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }
  
    

  render(){  
    
      Aos.init({duration:2000});
  
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      

    return(
      
      <div className="content-custome">
      <h1>"Dokumentasi penyerahan donasi"</h1>
      
      <ModalVideo channel='youtube' autoplay isOpen={this.state.isOpen} videoId={this.state.idyoutube} onClose={() => this.setState({isOpen: false})} />
      <Slider {...settings}>
                              
                              <div>
                                  <div className="cardvideo">
                                      <div className="thumnail">
                                          <img src="assets/images/olismix logo.png" alt="" className="covervideo" />
                                          <button onClick={()=>this.openModal("K_kAY-A0hk8")}  className="btnplay youtube-link">
                                              <center><i className="fas fa-play-circle"></i></center>
                                          </button>
                                      </div>
                                      <div className="contentvideo">
                                          <h4 className="titlevideo">Contoh vide dokumentasi</h4>
                                          <p className="descriptionvideo">
                                              <span><a href="#"><i className="fab fa-youtube"></i> Olismix</a></span><span><i className="fas fa-calendar-alt"></i> 01-02-2022</span>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div>
                                  <div className="cardvideo">
                                      <div className="thumnail">
                                          <img src="assets/images/olismix logo.png" alt="" className="covervideo" />
                                          <button onClick={()=>this.openModal("K_kAY-A0hk8")}  className="btnplay youtube-link">
                                              <center><i className="fas fa-play-circle"></i></center>
                                          </button>
                                      </div>
                                      <div className="contentvideo">
                                          <h4 className="titlevideo">Contoh vide dokumentasi</h4>
                                          <p className="descriptionvideo">
                                              <span><a href="#"><i className="fab fa-youtube"></i> Olismix</a></span><span><i className="fas fa-calendar-alt"></i> 01-02-2022</span>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div>
                                  <div className="cardvideo">
                                      <div className="thumnail">
                                          <img src="assets/images/olismix logo.png" alt="" className="covervideo" />
                                          <button onClick={()=>this.openModal("K_kAY-A0hk8")}  className="btnplay youtube-link">
                                              <center><i className="fas fa-play-circle"></i></center>
                                          </button>
                                      </div>
                                      <div className="contentvideo">
                                          <h4 className="titlevideo">Contoh vide dokumentasi</h4>
                                          <p className="descriptionvideo">
                                              <span><a href="#"><i className="fab fa-youtube"></i> Olismix</a></span><span><i className="fas fa-calendar-alt"></i> 01-02-2022</span>
                                          </p>
                                      </div>
                                  </div>
                              </div> 

      </Slider>
                      
              </div>
   
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    youtube:state.datayoutube,
  }
}

export default connect(mapStatetoprops)(dokumentasiberanda);