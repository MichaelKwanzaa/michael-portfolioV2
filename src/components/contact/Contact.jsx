import {useState} from 'react'
import emailjs from "emailjs-com";
import SendImage from "../../media/sending.png"
import SentImage from "../../media/sent.png"
import "./contact.css"
export default function Contact({id}) {
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler =  (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE,
            process.env.REACT_APP_TEMPLATE,
            e.target, 
            process.env.REACT_APP_USER)
        .then(setLoading(false))
        .then((result) => {
            e.target.reset();
            setSubmit(true);
        }, (error) => {
            setError(error.text);
        });
    }

    return (
        <div id={id} data-scroll-section className="contactMe">
            <h1 className={error 
            ? "errorDisplay"
            : "errorDisplayNone"}>{error}</h1>
            <div className="contactMeContainer"> 
                {!submit 
                ? (
                    <>
                    <div className="contactMeLeft">
                        <form onSubmit={submitHandler}>
                            <div className="contactMeLeftInput firstAndLast">
                                <input type="text"
                                placeholder="First name..."
                                id="firstName"
                                name="first_name"
                                required
                                />  
                                <input type="text"
                                placeholder="Last name..."
                                id="lastName"
                                name="last_name"
                                required
                                />  
                            </div>
                            
                            <div className="contactMeLeftInput email">

                                <input type="email"
                                placeholder="Email..."
                                id="email"
                                name="email"
                                required
                                />
                            </div>
                            <div className="contactMeLeftInput subject">
                                <input type="text"
                                placeholder="Subject..." 
                                id="subject"
                                name="subject"
                                required
                                />                            
                            </div>
                            <div className="contactMeLeftInput textarea">
                                <textarea 
                                placeholder="What would you like to tell me...?"
                                id="info"
                                name="message"
                                rows={14}
                                
                                required
                                />
                            </div>
                            <div className="contactMeLeftButton"> 
                                <button type="submit" onClick={() => !error ? setLoading(true) : setLoading(false) }>{
                                    loading 
                                    ? <div className='lds-dual-ring'></div>
                                    : "Send"
                                }</button>
                            </div>
                            

                            </form>
                    </div>
                    <div className="contactMeRight">
                       <div className="contactMeRightImage">
                            <img src={SendImage} alt="" />
                       </div>
                    </div>
                    </>
                )
                : (
                    <div className="contactMeSubmitted">
                        <div className="contactMeSubmittedContainer">
                            <h1 className="messageSent">Your Message has been sent successfully!</h1>
                            <img src={SentImage} alt={SentImage} />
                        </div>
                        
                    </div>
                )
             }
            </div>
        </div>
    )
}
