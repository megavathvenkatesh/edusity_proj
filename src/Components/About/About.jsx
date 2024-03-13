import React from "react";
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return(
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className='play-icon' onClick={() => 
                {setPlayState(true)}}/>
            </div>
            <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nutring Tommrow's Leaders Today</h2>
            <p>If "Unicer University" is a specific institution you're referring to, please
            provide more context or details, and I'll do my best to assist you further.
            Otherwise, if you're looking for information on universities in general 
            or have questions about a particular university, feel free to ask!</p>
            <p>As of my last update in January 2022, there isn't a widely recognized university 
            named "Unicer University." It's possible that it could be a fictional university, a 
            lesser-known institution, or a university with a different name.</p>
            <p>Universities can vary in terms of their focus, size, and structure.
            They may include public universities, private universities, research universities, 
            liberal arts colleges, technical universities, and more.</p>
            </div>
        </div>

    )
}

export default About;

