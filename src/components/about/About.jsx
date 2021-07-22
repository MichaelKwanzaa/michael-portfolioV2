import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ProfilePicture from "../../media/ProfilePicture.jpg"
import {portfolioData} from "../../data";
import {Link} from "react-scroll"
import "./about.css"

const About = () => {
        const aboutMe = portfolioData.aboutMe;
        const likes = portfolioData.likes;
        const age = portfolioData.age;
        const born = portfolioData.born;
        const countries = portfolioData.countries;
        const langs = portfolioData.languages;

            return (
                <section className="about" id="About" data-scroll-section>
                    <div className="aboutContainer">
                        <div className="aboutProfilePictureContainer">
                            <div className="aboutProfilePicture">
                                <img src={ProfilePicture} alt={ProfilePicture} className="aboutProfilePictureImage" />
                            </div>
                            <div className="aboutMiniInformation">
                                <div className="aboutMiniInfo">
                                    <span className="aboutMini miniAge">Age: </span> <p>{age}</p>
                                </div>
                                <div className="aboutMiniInfo">
                                    <span className="aboutMini miniBorn">Born: </span><p>{born}</p>
                                </div>
                                <div className="aboutMiniInfo">
                                    <span className="aboutMini miniBorn">Countries Lived/Visited: </span><p>{countries.join(', ')}</p>
                                </div>
                                <div className="aboutMiniInfo socials">
                                    <span className="socialMedia">
                                        <a href="https://www.instagram.com/alkebulanmike" target="_blank" rel="noreferrer">
                                            <InstagramIcon className="social-links" />
                                        </a>
                                        <a href="https://github.com/MichaelKwanzaa" target="_blank" rel="noreferrer">
                                            <GitHubIcon className="social-links" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/michael-agbonyeme-3a29861b9/" target="_blank" rel="noreferrer">
                                            <LinkedInIcon className="social-links" />
                                        </a>
                                    </span>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="aboutMeElementsContainer">
                            <div className="aboutMeAbout me">
                                <h1>About Me</h1>
                                <p>{aboutMe}</p>
                            </div>
                            <div className="aboutMeAbout likes">
                                <h1>My Likes/Interests</h1>
                                {likes.map(e => {
                                    return (<p key={e}>- {e}</p>)
                                })}
                            </div>
                            <div className="aboutMeAbout langs">
                                <h1>Languages/Frameworks</h1>
                                {<p>{langs.join(', ')}</p>}
                            </div>
                            <div className="aboutMeAbout port">
                                <Link className="link"
                                    to="Projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="active">
                                <ExpandMoreIcon className="expandMoreIcon" />
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </section>
            )
    
    
}

export default About
