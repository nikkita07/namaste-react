import { useState } from "react";
import { lOGO_URL } from "../../utils/constants";
import {Link} from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () =>{
// const btnName = "LOGIN";
const [btnName, setBtnName] = useState("LOGIN");
const onlineStatus = useOnlineStatus();


    return(
        <div className="header">
            <div className="logo-container">
          <img src={lOGO_URL}/>
               
            </div>
<div className="nav-items">
    <ul className="nav-ul">
        <li>Status : {onlineStatus ? "On" : "Off"}</li>
        <li><Link to="/">
        Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
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