import React, { Component } from 'react';
import './TrackingModule.css'
import Script from './Script'



class TrackingModule extends Component {
  constructor(props) {
    super(props);
  }
            // The render method contains the JSX code which will be compiled to HTML.
            render() {
                return (

              <div className="container is-fluid">

                    <div className="video-container">

		                <video id="video"  preload="true" autoPlay loop muted style={style.video}></video>
                </div>



                  </div>



                )
            }

           componentDidMount(){

		    Script();



		  }  
    }


const style = {


  video: {
    position: 'fixed',
    left: '0',
    top: '0'
  },
  canvas: {
    display: 'block',
    position: 'fixed',
    left: '0',
    top: '0'
  },
  button: {
    display: 'block',
    margin: '0 auto',
    position: 'absolute',
    left: '50%',
    marginLeft: '-207px',
    bottom: '50px'
  }




};


    export default TrackingModule;