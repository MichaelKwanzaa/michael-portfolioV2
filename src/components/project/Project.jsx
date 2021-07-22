
import "./project.css"

export default function Project({image, projectIndex, }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

        return (
            <>
                <img src={`${PF}${image}`} alt={`${PF}${image}`}/>
            </>
                
        )
    }
      