import React, { Component } from 'react';
import {connect} from 'react-redux';
import Bottomcomponet from '../../bottomcomponet';
import Subheader from '../../subheader';
class Tentangkami extends Component {
    
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
            <div>
                <div className="page page--main" data-page="main" style={{transform:"translate3d(0, 0, 0)"}}>
                		<Subheader />

                <div className="page__content page__content--with-header page__content--with-bottom-nav">
                <img style={styleimage} src="/assets/images/splash2.png" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eget velit aliquet sagittis id consectetur purus. Eleifend quam adipiscing vitae proin sagittis nisl. Sit amet consectetur adipiscing elit ut aliquam purus. Malesuada fames ac turpis egestas sed tempus. Laoreet sit amet cursus sit. Vulputate eu scelerisque felis imperdiet. Arcu ac tortor dignissim convallis aenean et. Iaculis eu non diam phasellus. Porta lorem mollis aliquam ut. Proin nibh nisl condimentum id venenatis. Id velit ut tortor pretium viverra suspendisse potenti. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Platea dictumst quisque sagittis purus. Non tellus orci ac auctor augue mauris. At volutpat diam ut venenatis tellus in. Ornare arcu odio ut sem nulla pharetra diam sit.</p>

                <p>Leo integer malesuada nunc vel risus commodo. Molestie at elementum eu facilisis sed. Molestie a iaculis at erat pellentesque adipiscing commodo. Maecenas sed enim ut sem viverra. Amet dictum sit amet justo donec. Orci porta non pulvinar neque. Nec sagittis aliquam malesuada bibendum arcu vitae. Feugiat nisl pretium fusce id velit ut tortor pretium. Id aliquet lectus proin nibh nisl condimentum. Eu nisl nunc mi ipsum faucibus vitae. Id volutpat lacus laoreet non curabitur gravida arcu. Urna id volutpat lacus laoreet. Aliquam vestibulum morbi blandit cursus risus. Odio tempor orci dapibus ultrices in. Massa enim nec dui nunc mattis enim ut tellus. Neque gravida in fermentum et sollicitudin ac. Laoreet suspendisse interdum consectetur libero id faucibus. Tellus cras adipiscing enim eu. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit.</p>
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
  
  export default connect(mapStatetoprops)(Tentangkami);