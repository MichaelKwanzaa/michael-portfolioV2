import { useState, useEffect, useRef } from "react"
import {quoteGen} from "../../data";
import {Link} from "react-scroll"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HeroImage from "../../media/heroProfilePicture.jpg";
import gsap from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "./hero.css"
import { Power2 } from "gsap/gsap-core";

gsap.registerPlugin(CSSRulePlugin)
function Hero(){
        const [quote, setQuote] = useState("");
        const [author, setAuthor] = useState(""); 

        useEffect(()=> {
            changeQuote();
         }, [])
        const changeQuote = () => {
            let index = 0;

            let totalQuotes = quoteGen.quotesArray.map(e => e.quotes)

            let totalLength = totalQuotes.map(ele => ele.length).reduce((a, b) => a + b, 0);
            
            const allQuotes = flatten(totalQuotes);

            let randomNumber = Math.floor(Math.random() * totalLength);
            let awaitedQuote = allQuotes[randomNumber];
            setQuote(awaitedQuote);
            index = randomNumber;

            let awaitedAuthor = findAuthor(index);
            setAuthor(awaitedAuthor)

        }

        function flatten(arr){
            let newArray = [];
            for(let i=0; i < arr.length; i++){
                if(Array.isArray(arr[i])){
                    newArray = newArray.concat(flatten(arr[i]))
                } else {
                    newArray.push(arr[i])
                }
            }
            return newArray;
        }

        function findAuthor(value){
            if(value < 13) return "Alan Watts";
            if(value === 13 ) return "Satsuki Kiryuuin";
            if(value === 14) return "Nobito"
            if(value === 15) return "Shintaro Midorima"
            if(value === 16) return "Nagato Uzimaki"
    
        }

        let container = useRef(null)
        let imageRef = useRef(null)
        let imageReveal = CSSRulePlugin.getRule(".heroImageContainer::after");
        let quoteContainer = useRef(null)
        let quoteReveal = CSSRulePlugin.getRule(".quoteAndAuthor::after")
        useEffect(() => {
            gsap.to(container, {
                duration: 0,
                css: {visibility: "visible"}
            })
            gsap.to(imageReveal,{
                duration: 1.4,
                width: "0%",
                ease: Power2.easeInOut
            })
            gsap.to(quoteContainer, {
                duration: 0,
                css: {visibility: "visible"}
            })
            gsap.to(quoteReveal, {
                duration: 2,
                height: "0%",
                ease: Power2.easeOut,
                delay: 0.8
            })
            gsap.to(imageRef, {
                duration: 1.4,
                css: {transform: "scale(1.0)"},
                ease: Power2.easeInOut,
            })
            
        })

        return (
            <section className="hero" id="Home">
                <div className="heroContainer">
                    <div className="quoteGenerator">
                        <div className="quoteAndAuthor" ref={el => (quoteContainer = el)}>
                            <h1>{quote}</h1>
                            <h2>- {author}</h2>
                            <div className="changeQuote">
                                <button onClick={changeQuote}>New Quote</button>                           
                            </div>
                            </div>
                            
                    </div>
                    <div className="heroImageRevealer">
                        <div className="heroImageContainer" ref={el => (container = el)}>
                            <img src={HeroImage} alt={HeroImage} ref={el => (imageRef = el)} />
                        </div>
                        
                    </div>
                   
                </div>
            
                <Link className="link"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active">
                         <div className="scrollDown">
                         <ArrowBackIcon />Scroll Down
                        </div>
                    </Link>
                    
            </section>
        )
    }


export default Hero
