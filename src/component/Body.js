import RestaurantCard from "./RestaurantCard.js";
// import resList from "../../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";


const Body =()=>{

  const [listOfRestaurants,setListOfRestaurant] = useState([]);
   useEffect(()=>{
    fetchData(); //fetch data from API
   },[])

 const fetchData =async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
 };

  if(listOfRestaurants.length===0){
   return <Shimmer/>
  }
    return(
        <div className="body">
             <div className="filter">
                <button className="filter-btn" onClick={()=>{
               const filteredRestaurant =   listOfRestaurants.filter((res)=>res.info.avgRating > 4);
               setListOfRestaurant(filteredRestaurant);
                }}
                > 
         
                top rated restaurants
                </button>
             </div>
             <div className="res-container">
         {
            
            listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            
         }
             </div>
        </div>
    )
}

export default Body;