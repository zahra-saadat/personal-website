import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"

const Footer = () =>{
    return(
        <div className="container border-top pt-3 pb-5 mt-5">
            <div className="row">
                <div className="col-sm-3">
                    <div className="h5">Phone</div>
                    <span>01234567</span>
                </div>
                <div className="col-sm-3">
                    <div className="h5">Email</div>
                    <span>me@mysite.com</span>
                </div>
                <div className="col-sm-3">
                    <div className="h5">Follow me</div>
                    <span>
                        <FontAwesomeIcon icon={faLinkedin} 
                        color="black" fontSize="25px" className="pe-2"> 
                        </FontAwesomeIcon>   
                        <FontAwesomeIcon icon={faGithub} 
                        color="black" fontSize="25px">
                        </FontAwesomeIcon>
                    </span>
                </div>
                <div className="col-sm-3">
                    <div className="">
                    <pre className="pb-0">
                    2035 By Nicol Rider.
                    </pre>
                    <pre>
                    Powered and secured by
                    </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer