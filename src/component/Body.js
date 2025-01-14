import RestaurantCard from "./RestaurantCard.js";
// import resList from "../../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";


const Body =()=>{
   const [searchText , setSearchText] = useState("");
  const [listOfRestaurants,setListOfRestaurant] = useState([]);
   const [filterSearch , setFilterSearch] = useState("");
  console.log('body rendered');
  useEffect(()=>{
    fetchData(); //fetch data from API
   },[])
   
 const fetchData =async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
    setFilterSearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 };
 //known as CONDITIONAL RENDERING 
return (listOfRestaurants.length===0) ? <Shimmer/> : (
        <div className="body">
             <div className="filter">
               <div className="search">
                  <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                     setSearchText(e.target.value);
                  }}/>
                  <button className="search-btn" onClick={()=>{
                     //filter the restaurant card and updating the UI
                     const filteredSearch = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText)); 
                     setFilterSearch(filteredSearch); 
                  }}>Search </button> 
          
                <button className="filter-btn" onClick={()=>{
               const filteredRestaurant =   listOfRestaurants.filter((res)=>res.info.avgRating > 4);
               setListOfRestaurant(filteredRestaurant);
                }}
                > 
         
                top rated restaurants
                </button>
                </div>
             </div>
             <div className="res-container">
         {
            
            filterSearch.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            
         }
             </div>
        </div>
    )
}

export default Body;