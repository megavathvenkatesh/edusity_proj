import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting edge is designed  to empower students with 
                    the knowledge, skills, and expericence needed to excel 
                    in the dynamic filed of education
                </p>
                    <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
            </div>

        </div>

    )
}

export default Hero;