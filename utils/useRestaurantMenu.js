import { useEffect, useState } from "react";
import { PAGE_URL } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
           fetchData() ;
    },[]);
   //empty dependency array to call useEffect only once

    const fetchData = async () =>{
        const data = await fetch(PAGE_URL+resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo ;
}
export default useRestaurantMenu;