import React, { Component } from 'react';
import './About.css'

class About extends Component {

                render() {
                return (
                <div className="container is-fluid">
                    <div className="about--section content">
                   		<p>urbestselfie is an open-source web app by <a href='https://marthahipley.com/' target='_blank'>Martha Hipley</a>.</p>
                    
                            <p>While apps like Facebook and Snapchat may use facial-reconition technology
                            to help us connect with friends and decorate our images, this is also a dangerous precedent
                            that puts people at risk. Likewise, the location data that makes our apps more convenient and customized 
                            can also easily be turned on vulnerable people. It's easy to forget that when we sign on for cuteness and convenience,
                            we also are helping to grow and improve systems that can be the source of serious human rights risks.</p>
                        <p>urbestselfie attempts to invert these tools to help users better protect themselves. The masks, particle fields, 
                        and characters overlaid onto your image confuse existing tracking technology. Apps like Facebook can't distinguish faces
                        in images altered with urbestselfie, and no location data or images are stored by urbestselfie itself. Additionally, the codebase
                        is open-source - anyone is free to see how the images are made and how the technology functions.</p>
                        <p>urbestselfie inspired by and makes use of the research of other projects in the space, particularly Adam Harvey’s     
                            <a href='https://cvdazzle.com' target='_blank'> CV Dazzle</a>. In the time since CV Dazzle was first released, 
                            a number of the “unrecognizable” patterns have become obsolete even to the most rudimentary algorithms, but 
                            several of Harvey’s patterns serve as functional inspiration for the options in urbestselfie.</p>

                        <p>More reading on the ethical problems of location and face-tracking:
                        </p>
                        <ul>
                            <li><a href='https://www.theguardian.com/technology/2014/may/04/facial-recognition-technology-identity-tesco-ethical-issues' target='_blank'>Facial recognition: is the technology taking away your identity?</a></li>
                            <li><a href='https://www.nytimes.com/2018/07/18/lens/what-do-facial-recognition-technologies-mean-for-our-privacy.html' target='_blank'>What Do Facial Recognition Technologies Mean for Our Privacy?</a></li>
                            <li><a href='https://www.theverge.com/2018/4/26/17285034/axon-ai-ethics-board-facial-recognition-racial-bias' target='_blank'>Axon launches AI ethics board to study the dangers of facial recognition</a></li>
                            <li><a href='https://www.aclu.org/issues/privacy-technology/surveillance-technologies/face-recognition-technology' target='_blank'>ACLU: Facial Recognition Technology</a></li>
                            
                            <li><a href='https://www.aclu.org/issues/privacy-technology/location-tracking' target='_blank'>ACLU: Location Tracking</a></li>

                        </ul>                        
                    </div>
                </div>
                )
            }
    }

    export default About;