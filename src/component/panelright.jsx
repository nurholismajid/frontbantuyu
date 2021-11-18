import React, { Component } from 'react';
import {connect} from 'react-redux';
class panelright extends Component {
    
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
            <div className="panel panel--right">
      <div className="search">
	  
                <div className="search__form">
			<form>
				<input type="text" className="search__input" id="" name="" value="" placeholder="SEARCH" />
				<input type="submit" className="search__submit" value="Send" />
			</form>		
		</div>
		<div className="search__results">
			<h3>Results</h3>
			<div className="search-result">
				<div className="search-result__thumb"><img src="/assets/images/photos/image-1.jpg" alt="" title=""/></div>
				<div className="search-result__details">
					<p>The <strong>creative adult</strong> is the child who survived</p>
				</div>
			</div>
			<div className="search-result">
				<div className="search-result__thumb"><img src="/assets/images/photos/image-2.jpg" alt="" title=""/></div>
				<div className="search-result__details">
					<p>To be creative means to be <strong>in love</strong> with life</p>
				</div>
			</div>
			<div className="search-result">
				<div className="search-result__thumb"><img src="/assets/images/photos/image-3.jpg" alt="" title=""/></div>
				<div className="search-result__details">
					<p>A designer knows he has achieved <strong>perfection</strong></p>
				</div>
			</div>
			<div className="search-result">
				<div className="search-result__thumb"><img src="/assets/images/photos/image-4.jpg" alt="" title=""/></div>
				<div className="search-result__details">
					<p><strong>Creativity</strong> is breaking out of established patterns</p>
				</div>
			</div>

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
  
  export default connect(mapStatetoprops)(panelright);