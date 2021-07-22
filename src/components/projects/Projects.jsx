import Project from "../project/Project"
import { portfolioData } from "../../data"
import "./projects.css"
import { Link } from "react-router-dom";
import {Link as ScrollLink} from "react-scroll"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination
} from 'swiper/core';
  
SwiperCore.use([Pagination]);


export default function Projects({id}) {
    const images = portfolioData.projects.map((project, index) => project.photoUrls.map(photo => 
    <SwiperSlide className="swiper-slide" >
        <Project
        image={photo}
        projectIndex={index} />
    </SwiperSlide>
    )[0])
    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              }
      }

    return (
        <div className="projects" id={id} >
            <Link to="/projects">
                <button>View All Projects</button>  
            </Link>
            <Swiper pagination={pagination} className="mySwiper">  
                {images}
            </Swiper>

            <ScrollLink className="link"
                                to="Contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                <button className="contactMeScroll">
                    Contact Me</button>  
            </ScrollLink>
           
        </div>
    )
}
