import { portfolioData } from "../../data"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import "./viewall.css"



export default function ViewAll() {
    const PROJECT = portfolioData.projects; 
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const images = PROJECT.map(p => p.photoUrls.map(e => {
        const slug = p.projectName.toLowerCase().split(' ').join("-")
        return (
            <div className="projectImageView">
                <div className="viewAllProjectsImage">
                <Link to={`/project/${slug}`} style={{textDecoration: "none", padding: "0px", margin:"0px"}}>
                    <img src={PF+e} alt={e} />
                    <div className="viewProjectContainer">
                        <h3 className="viewProject">View Project</h3>
                    </div>
                </Link>
                    
                </div>
            </div>
        )
    })[0])

    return (
        <div className="viewAllProjects">
            <div className="viewAllProjectsContainer">
                <div className="viewAllProjectsTop">
                <div className="backArrowContainer">
                        <Link to="/" style={{textDecoration: "none", color: "inherit", display: "flex", alignItems: "center"}}>
                            <ArrowBackIcon className="backArrow" />
                            <h3>Back to Home</h3>
                        </Link>
                    </div>
                </div>
                <div className="viewAllProjectsBottom">
                    <div className="viewAllProjectsImageContainer">
                        {images}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
