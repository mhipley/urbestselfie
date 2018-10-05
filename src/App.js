import React, { Component } from 'react';

import './App.css';

import About from './About/About'

import TrackingModule from './Tracking/TrackingModule'

import ToggleDisplay from 'react-toggle-display'

import mask from './mask.svg';
import option1 from './option1.svg'
import option2 from './option2.svg'
import option3 from './option3.svg'

import html2canvas from 'html2canvas'

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleOptions= this.toggleOptions.bind(this);

    this.state = {
      aboutShow: false,
      trackingShow: true,
      optionsShow: false,
      photoShow: false,
      wrapperShow: true,
      tutorialShow: true
    };

  }

  toggleAbout() {
    this.setState({
      aboutShow: !this.state.aboutShow,
      trackingShow: !this.state.trackingShow,
      optionsShow: false,
      photoShow: false,
      wrapperShow: !this.state.wrapperShow
    });
  }


  toggleOptions() {
    this.setState({
      optionsShow: !this.state.optionsShow
    });
  }

  closeTutorial() {
    this.setState({
      tutorialShow: false
    });    
  }

  togglePicture() {
    this.setState({
      aboutShow: false,
      trackingShow: false,
      optionsShow: false,
      photoShow: true,
      wrapperShow: false
    });
  }  


restart() {
  window.location.reload();
}


  render() {

    return (
      <div className="App">
        <nav className="navbar is-primary is-fixed-top" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="">
              urbestselfie
            </a>

          </div>

          <div className="navbar-end">
              <a className="navbar-item" onClick={ () => this.toggleAbout() }>
                <span className="icon" >
                  <i className="fas fa-info-circle" ></i>
                </span>
              </a>            
          </div>

        </nav>

        <section className="section" id="boundary">

        <ToggleDisplay show={this.state.aboutShow}>
          
            <About />
        </ToggleDisplay>

        <ToggleDisplay show={this.state.tutorialShow}>
                <div className="container is-fluid">
          <div className="modal is-active step-1">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <div className="language-toggle"></div>
                <button className="delete" aria-label="close" onClick={ () => this.closeTutorial() }></button>
              </header> 
              <section className="modal-card-body">
              <p>urbestselfie is an app about privacy, security, and making k3wt selfies.</p>
              <p>Click <span className="icon"><img src={mask} alt="mask icon" className=""/></span> on the bottom left to choose a filter from the menu.</p> 
              <p>You can click <span className="icon"><i className="fas fa-redo-alt"></i></span> if you get stuck or want to refresh the page. </p><p>
              The camera is disabled in this gallery presentation, but you can use the app at home to take and save your own images.</p>
              </section>
              <footer className="modal-card-foot">
              </footer>
            </div>
          </div>
          </div>
        </ToggleDisplay>         

        <ToggleDisplay show={this.state.trackingShow}>
          <TrackingModule />
        </ToggleDisplay> 

        <ToggleDisplay show={this.state.photoShow}>
          <div className="container is-fluid">
            <div className="image-decide">
              <p>Want to save this image? Click below to open it in a new tab to save to your camera roll.</p>
              <a className="button is-success" id="btn-download" href="#">Open image.</a> <button className="button is-warning">Reset app.</button>
            </div>
            <div id="image">
            </div>
          </div>
        </ToggleDisplay> 
        <ToggleDisplay show={this.state.wrapperShow}>
        <div id="wrapper">

        </div>

        </ToggleDisplay>
        </section>

        <nav className="navbar is-primary is-fixed-bottom" aria-label="secondary toolbar">
          <div className="navbar-start">

            <div  
                onClick={ this.toggleOptions } 
                className= { this.state.optionsShow ? "navbar-item has-dropdown has-dropdown-up is-active" : "navbar-item has-dropdown has-dropdown-up" }>
                <span className="icon">
                  <img src={mask} alt="mask icon" className=""/>
                </span>       
              <div className="navbar-dropdown">

                  <a className="navbar-item" id="option1button">
                      <span className="icon">
                        <img src={option1} alt="option1 icon"/>
                      </span>

                  </a>
                  <a className="navbar-item" id="option2button">
                      <span className="icon">
                        <img src={option2} alt="option2 icon"/>
                      </span>
                  </a>
                  <a className="navbar-item" id="option3button">
                      <span className="icon">
                        <img src={option3} alt="option3 icon"/>
                      </span>

                  
                  </a>
              </div>
            </div>

            <a className="navbar-item">
                <span className="icon" onClick={ () => this.restart() }>
                  <i className="fas fa-redo-alt"></i>
                </span>            
            </a>  
          
          </div>

          <div className="navbar-end">
            <a className="navbar-item">
                <span className="icon" >
                  <i className="fas fa-camera"></i>
                </span>            
            </a>         
          </div>

        </nav>
      </div>
    );
  }

  componentDidMount(){
      //this is to reload the page every 5 minutes in gallery mode
    setInterval(function() {
                  window.location.reload();
                }, 300000); 
  //external links disabled for gallery
        var anchors = document.getElementsByTagName("a");
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].onclick = function() {return false;};
        }
  }    


}

const style = {
captureImage: {
width: '100%',
}


};

export default App;
