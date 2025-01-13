import RestaurantCard from "./RestaurantCard.js";
import resList from "../../utils/mockData.js";
import { useState } from "react";


const Body =()=>{

  const [listOfRestaurants,setListOfRestaurant] = useState(resList);
  


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