import { useState } from "react";
import { lOGO_URL } from "../../utils/constants";

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
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <button className="login" onClick={()=>{
         setBtnName === "LOGIN" ? setBtnName("LOGOUT") :setBtnName("LOGIN"); 
        }}>{btnName}</button>
    </ul> 
</div>  
        </div>
    )
}
export default Header ;