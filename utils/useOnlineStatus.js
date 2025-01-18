 /*
  what should be the input : check if online 
  
  
  
  */

import { useEffect, useState } from "react";

const useOnlineStatus  = () =>{

    const [onlineStatus ,setOnlineStatus] = useState(true);

useEffect(()=>{
  window.addEventListener("offline",()=>{
    setOnlineStatus(false);
  })
  window.addEventListener("online",()=>{
    setOnlineStatus(true);
  })
},[]);

    
    return onlineStatus;
}


export default useOnlineStatus;