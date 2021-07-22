import Image from "../../media/404.jpg"
import {Link} from "react-router-dom"
import "./notfound.css"
export default function NotFound() {
    return (
        <div className="notFound">
            <div className="notFoundContainer">
                
                <img src={Image} alt={Image} />
                    
                <Link to="/" style={{textDecoration: "none"}}>
                    <div className="goHome">
                        Go back home
                    </div>    
                </Link>               
                
            </div>
        </div>
    )
}
