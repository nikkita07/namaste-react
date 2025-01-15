import { useState } from "react";
import { lOGO_URL } from "../../utils/constants";
import {Link} from "react-router";
const Header = () =>{
// const btnName = "LOGIN";
const [btnName, setBtnName] = useState("LOGIN");


    return(
        <div className="header">
            <div className="logo-container">
          <img src={lOGO_URL}/>
               
            </div>
<div className="nav-items">
    <ul>
        <li><Link to="/">
        Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/">Cart</Link></li>
        <button className="login" onClick={()=>{
         setBtnName === "LOGIN" ? setBtnName("LOGOUT") :setBtnName("LOGIN"); 
        }}>{btnName}</button>
    </ul> 
</div>  
        </div>
    )
}
export default Header ;