import {useEffect, useRef, useState} from 'react'
import {Link, animateScroll as scroll} from "react-scroll"
import Typed from "react-typed";
import { portfolioData } from "../../data"
import MenuIcon from '@material-ui/icons/Menu';
import "./navbar.css"

const Navbar = () => {

    const fnData = portfolioData.firstName.toUpperCase();
    const lnData = portfolioData.lastName.toUpperCase();
    const mnData = portfolioData.middleName.toUpperCase();

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const [navbar, setNavbar] = useState(false);

    const changeNavBackground = () => {
        if(window.scrollY >= 550){
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeNavBackground);

    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, [])

    useEffect(() => {
        function handleResize(){
            setWindowDimension(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    })

    const isMobile = windowDimension <= 640;

    const [openMenu, toggleMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const closeMenu = e => {
            if(menuRef.current && menuRef.current.contains(e.target)){
                return;
            };

            toggleMenu(false);
        };

        document.addEventListener("mousedown", closeMenu);
        return () => document.removeEventListener("mousedown", closeMenu);
    })

    const toggle = () => {
        toggleMenu(true);
    }

    return (
        <div className={navbar ? "navbar active" : "navbar"}>
            {isMobile ? (
                <div className="mobileContainer">
                    <div className="mobileLogoContainer">
                    <Typed 
                    className={navbar ? "mobileLogo active" : "mobileLogo"}
                    showCursor={false}
                    strings={[fnData, mnData, lnData]}
                    typeSpeed={40}
                    backSpeed={30}
                    backDelay={5000}
                    loop
                    />
                    </div>
                    <div className={navbar ? "mobileLinks active" : "mobileLinks"}>
                        <MenuIcon className={navbar ? "hamburger active" : "hamburger"} onClick={toggle} />
                        <ul className={openMenu ? "mobileItems toggle" : "mobileItems"} ref={menuRef}>
                        <li className="mobileLink">
                            <Link className="link"
                                to="Home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                                Home
                            </Link>
                        </li>
                        <li className="mobileLink">
                            <Link className="link"
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                                About 
                                </Link>
                        </li>
                        <li className="mobileLink">
                            <Link className="link"
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                                Projects
                            </Link>
                        </li>
                        <li className="mobileLink">
                            <Link className="link"
                                to="Contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                                    Contact
                                </Link>

                        </li>
                    </ul>
                    </div>
                </div>
            )
            : (<div className="navbarContainer">
                <div className="navbarLogo" onClick={scrollToTop}>
                    <Typed 
                    className={navbar ? "logo active" : "logo"}
                    showCursor={false}
                    strings={[fnData, mnData, lnData]}
                    typeSpeed={40}
                    backSpeed={30}
                    backDelay={5000}
                    loop
                    />
                </div>
                <div className="navbarLinks">
                    <ul>
                        <li className="navbarLink">
                            <Link className="link"
                                to="Home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                                Home
                            </Link>
                        </li>
                        <li className="navbarLink">
                            <Link className="link"
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                                About 
                                </Link>
                        </li>
                        <li className="navbarLink">
                            <Link className="link"
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                                Projects
                            </Link>
                        </li>
                        <li className="navbarLink">
                            <Link className="link"
                                to="Contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active">
                                    Contact
                                </Link>

                        </li>
                    </ul>
                </div> 
            </div>)}
        </div>
    )
}

export default Navbar
