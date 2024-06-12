import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from "@fortawesome/free-solid-svg-icons"

const Header = () =>{
    return(
        <div class="container pt-3 pb-3 fixed-top border-bottom">
            <div className="row">
                <div className="col-sm-6">
                <ul className="nav">
                    <li className="nav-item justify-content-start"> 
                        <Link to={"/"} className="nav-link dark">
                            <FontAwesomeIcon icon={faCircle} 
                                color="orange" fontSize="30px">
                            </FontAwesomeIcon> 
                        <span className="h4 text-body"> My Name</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                    <Link to={"/resume"} className="nav-link text-black">Resume</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/projects"} className="nav-link text-black">Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/contact"} className="nav-link text-black">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default Header