import { useEffect, useRef, useState } from "react";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import About from "../../components/about/About"
import Navbar from "../../components/navbar/Navbar";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {animateScroll as scroll} from "react-scroll"
import Loading from "../../media/loading.mp4"
import "./home.css";
export default function Home() {      
  const [preloader, setPreloader] = useState(true);
  const [scrollToTopButton, setScrollToTopButton] = useState(false);
  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false)
  }

  const scrollToTopFunc = () => {
    if(window.scrollY >= 600){
      setScrollToTopButton(true);
    } else {
      setScrollToTopButton(false);
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
}

  window.addEventListener("scroll", scrollToTopFunc);

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer-1);
    }, 1000)
  }, [])

  useEffect(() => {
    if(timer === 0){
      clear();
    }
  }, [timer])

    return (
      <>
          {preloader ? 
          <div className="loaderWrapper absolute">
            <h1>Michael Agbonyeme</h1>
            <h2>Developer</h2>
            <video autoPlay="autoPlay" 
                    loop="loop"
                    muted
                    style={{width: "400px", height: "200px", marginTop: "40px"}}>
              <source src={Loading} type="video/mp4" />
            </video>
          </div> 
          : 
            <div className="home-container"
            id="home-container"
            data-scroll-container>
              <Navbar />
              <Hero />
              <About />
              <Projects id="Projects" />
              <Contact id="Contact" />
              {scrollToTopButton && <div className="scrollBackToTopContainer" onClick={scrollToTop}>
               <ExpandLessIcon className="scrollBackToTop" />
              </div>}
        
        </div>}
       
        </>
    )
}
