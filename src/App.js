import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Router from './router/mainrouter'

class App extends Component  {

  constructor(props) {
    super(props);

   
  
  }

  async componentDidMount() {
    // await Api.get('?rest_route=/wp/v2/bidang-keahlian')
    // .then(res => {
    //   this.props.updatekeahlian(res.data);
    // })

   

 
}



  render(){

  return (
    <div>
      <Router />
    </div>
  );

}
}

const mapDipatchToprops = (dispatch) =>{
return{
  // updatewebidentity: (data) => dispatch({type:'UPDATEIDENTITY',datawebsiteidentity:data}),
}
}

const mapStatetoprops=(state)=>{
  return{
    option:state.dataoption
  }
}

export default connect(mapStatetoprops,mapDipatchToprops)(App);