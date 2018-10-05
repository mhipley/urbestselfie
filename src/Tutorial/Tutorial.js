import React, { Component } from 'react';
import './Tutorial.css'
import mask from '../mask.svg';

class Tutorial extends Component {

            render() {
                return (
                	
                <div className="container is-fluid">
					<div className="modal is-active step-1">
					  <div className="modal-background"></div>
					  <div className="modal-card">
					    <header className="modal-card-head">
					    	<div className="language-toggle"></div>
					      <button className="delete" aria-label="close"></button>
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
					<div className="modal step-2">
					  <div className="modal-background"></div>
					  <div className="modal-card">
					    <header className="modal-card-head">
					    	<div className="language-toggle"><a className="eng">eng</a> | <a className="es">es</a></div>
					      <button className="delete" aria-label="close"></button>
					    </header>
					    <section className="modal-card-body">
					    	<p>apps like Facebook use face-tracking technology to identify human 
					    	forms and individual people. this kind of technology is dangerous for 
					    	many people around the world and presents a real human rights risk.</p>
					    	<p>urbestselfie will help you disguise your face with cuteness, 
					    	so that when you upload your next selfie, you’re helping to confuse 
					    	these face-tracking algorithms for your own privacy and others’.</p>
					    </section>
					    <footer className="modal-card-foot">
					      <button className="button is-success">next ></button>
					    </footer>
					  </div>
					</div>
					<div className="modal step-3">
					  <div className="modal-background"></div>
					  <div className="modal-card">
					    <header className="modal-card-head">
					    	<div className="language-toggle"><a className="eng">eng</a> | <a className="es">es</a></div>
					      <button className="delete" aria-label="close"></button>
					    </header>
					    <section className="modal-card-body">
					    	<p>you can tap this icon to open a menu and select a selfie power-up 
					    	for masking your face.</p>
					    </section>
					    <footer className="modal-card-foot">
					      <button className="button is-success">next ></button>
					    </footer>
					  </div>
					</div>
					
					<div className="modal step-4">
					  <div className="modal-background"></div>
					  <div className="modal-card">
					    <header className="modal-card-head">
					    	<div className="language-toggle"><a className="eng">eng</a> | <a className="es">es</a></div>
					      <button className="delete" aria-label="close"></button>
					    </header>
					    <section className="modal-card-body">
					    	<p>click the camera to generate a photo from your webcam that you can save
					    	to your camera roll or share on social media.</p>
					    </section>
					    <footer className="modal-card-foot">
					      <button className="button is-success">next ></button>
					    </footer>
					  </div>
					</div>	
										
                </div>
                )
            }
    }

    export default Tutorial;
