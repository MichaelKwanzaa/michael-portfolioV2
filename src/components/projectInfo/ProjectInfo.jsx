import {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { portfolioData } from "../../data"
import "./projectinfo.css"




export default function ProjectInfo() {  
    const PROJECT = portfolioData.projects;  
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    //get project name from parameter
    let { projectName : id } = useParams();
    const projectName = id.split("-").map((e) => isNaN(e) 
    ? e.substring(0, 1).toUpperCase() + e.substring(1).toLowerCase() : e).join(" ");

    const [current, setCurrent] = useState(0);
    const data = (PROJECT.filter(e => e.projectName === projectName));
    let length = data[0].photoUrls.length;


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); 
    }


    const prevSlide = () => {
        if(current >= 0 ){
             setCurrent(current === length - 1 ? 0 : current - 1)
        } else if(current === -1) {
            setCurrent(0);
        }
       
    }

    if(!Array.isArray(data) || length === 0){
        return null
    }
 
    
    return (
        <div className="projectInformation">
            <div className="projectInformationContainer">
                <div className="projectInformationLeft">
                    <div className="backArrowContainer">
                        <Link to="/projects" style={{textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", justifyContent: "center",
                        marginTop: "20px", marginLeft: "20px"}}>
                            <ArrowBackIcon className="backArrow" />
                            <h3>Back to projects</h3>
                        </Link>
                    </div>
                    <div className="slider">
                        <ArrowBackIosIcon className={current > 0 ? "leftArrow" : "leftArrow none"} onClick={prevSlide} />
                        {data.map(project => project.photoUrls.map((photo, index) => {
                            return (
                                <div className={index === current ? "slide active" : "slide"} key={photo}>
                                    {index === current && (<img src={PF+photo}
                                     alt={photo} className="photoInfoPhoto" 
                                      />)}
                                </div>
                            )
                        }))}
                        <ArrowForwardIosIcon className="rightArrow" onClick={nextSlide} />
                    </div>
                       

                </div>
                <div className="projectInformationRight">
                    {data.map(project => {
                        return (
                            <div className="projectInformationRightContainer">
                                <div className="projectInformationRightInfo rightTitle">
                                    <h2>Project Name: </h2>
                                    <h3>{project.projectName}</h3>
                                </div>
                                <div className="projectInformationRightInfo rightAbout">
                                    <h2>Description: </h2>
                                    <h3>{project.about}</h3>
                                </div>
                                <div className="projectInformationRightInfo rightFunc">
                                    <h2>Project Functionality: </h2>
                                    <h3>{project.functionality.map(e => (
                                        <li>- {e}</li>
                                    ))}</h3>
                                </div>
                                <div className="projectInformationRightInfo rightTools">
                                    <h2>NPM Packages: </h2>
                                    <h3>{project.tools.join(", ")}</h3>
                                </div>
                                <div className="projectInformationRightInfo rightComment">
                                    <h2>Thoughts/Comments </h2>
                                    <h3>{project.comment}</h3>
                                </div>
                                {project.projectUrl ? <div className="projectInformationRightInfo rightUrl">
                                    <h2>Source code</h2>
                                    <a href={project.projectUrl} target="_blank" rel="noreferrer">
                                         <h3>{project.projectUrl}</h3>
                                    </a>
                                </div> : ""}
                                <div className="projectInformationRightInfo rightStatus">
                                    <h2>Status</h2>
                                    <h3>{project.status ? "Completed" : "Incomplete"}</h3>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
            
        </div>
    )
}
