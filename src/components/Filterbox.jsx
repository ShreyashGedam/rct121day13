import { Link } from "react-router-dom"
import "./styles.css"

export const Filterbox = () => {



    return (
        <div className="filterbox">
            <Link to={"/"}>Main Page</Link>
            <h4>Brand</h4>
            <div>
               <Link to="/brandhrx">
               HRX
               </Link>   
            </div>
            <div>
                <Link to="/brandroadster">
                    Roadster
               </Link>
            </div>
            <h4>Type</h4>
            <div>
               <Link to="/cotton">
               Cotton
               </Link>
               
            </div>
            <div>
               <Link to="/nocotton">
               No-Cottin
               </Link>
               
               
            </div>
        </div>
    )
}