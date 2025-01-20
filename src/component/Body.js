import RestaurantCard , {withPromotedLabel} from "./RestaurantCard.js";
// import resList from "../../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus.js";

const Body =()=>{
   const [searchText , setSearchText] = useState("");
   const [listOfRestaurants,setListOfRestaurant] = useState([]);
   const [filterSearch , setFilterSearch] = useState("");

/* creating a new component (RestaurantCardPromoted) by wrapping the RestaurantCard component with a Higher-Order Component (HOC) 
 called withPromotedLabel.*/
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

 const onlineStatus = useOnlineStatus();
 if(onlineStatus === false)return <h1>Looks like you're offline! please check you connection</h1>;
 
 //known as CONDITIONAL RENDERING 
return (listOfRestaurants.length===0) ? <Shimmer/> : (
        <div className="">
             <div className="filter">
               <div className="search">
                  <input type="text" className="border-2 border-black p-2 mx-3" value={searchText} onChange={(e)=>{
                     setSearchText(e.target.value);
                  }}/>
                  <button className="bg-green-600 mr-4 px-4 py-2 rounded-lg" onClick={()=>{
                     //filter the restaurant card and updating the UI
                     const filteredSearch = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText)); 
                     setFilterSearch(filteredSearch); 
                  }}>Search </button> 
          
                <button className="bg-green-600 mr-4 px-4 py-2 rounded-lg" onClick={()=>{
               // const filteredRestaurant =   listOfRestaurants.filter((res)=>res.info.avgRating > 4);
               // setListOfRestaurant(filteredRestaurant);
               const filteredRestaurant = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                 setFilterSearch(filteredRestaurant);

                }}
                > 
         
                top rated restaurants
                </button>
                </div>
             </div>
             <div className="flex flex-wrap">
  {
    filterSearch.map((restaurant) => (
      <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
      {/*  If a restaurant is marked as promoted (restaurant.info.Promoted is true), you render the RestaurantCardPromoted component, which shows the restaurant info along with a "Promoted" badge.
       Otherwise, you render the plain RestaurantCard without the "Promoted" label.  */}
        {restaurant.info?.Promoted ? (
          <RestaurantCardPromoted resData={restaurant} />
        ) : (
          <RestaurantCard resData={restaurant} />
        )}
      </Link>
    ))
  }
</div>

        </div>
    )
}

export default Body;