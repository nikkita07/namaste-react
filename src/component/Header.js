import { useState } from "react";
import { lOGO_URL } from "../../utils/constants";
import {Link} from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () =>{
// const btnName = "LOGIN";
const [btnName, setBtnName] = useState("LOGIN");
const onlineStatus = useOnlineStatus();


    return(
        <div className="flex justify-between">
            <div className="w-48">
          <img src={lOGO_URL}/>
               
            </div>
<div className=" flex items-center">
    <ul className="flex ">
        <li className="px-2">Status : {onlineStatus ? "On" : "Off"}</li>
        <li className="px-2"><Link to="/">
        Home</Link></li>
        <li className="px-2"><Link to="/about">About Us</Link></li>
        <li className="px-2"><Link to="/contact">Contact</Link></li>
        <li className="px-2"><Link to="/grocery">Grocery</Link></li>
        <li className="px-2"><Link to="/">Cart</Link></li>
        <button className="text-yellow-600 mx-4 font-bold" onClick={()=>{
         setBtnName === "LOGIN" ? setBtnName("LOGOUT") :setBtnName("LOGIN"); 
        }}>{btnName}</button>
    </ul> 
</div>  
        </div>
    )
}
export default Header ;