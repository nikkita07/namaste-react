// import { useEffect, useState } from "react"
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router";

// const RestaurantMenu = () =>{

//    const [resInfo,setResInfo] = useState(null);
//     const {resId} = useParams();


//     useEffect(()=>{
//       fetchMenu();
//     } ,[]);
//     const fetchMenu = async () => {
//         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId);
//         const json = await data.json();
//         console.log(json);
//         setResInfo(json.data);
    
//     };

//     if (resInfo === null) return <Shimmer/> ;
//     const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info ;
//     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//    console.log(itemCards);
    
//     return(
//         <div className="menu">
//             <h1>{name}</h1>
//             <h1>{costForTwoMessage}</h1>
//             <h2>{cuisines.join(',')}</h2>
//             <ul>
//                 {itemCards.map(item =><li key={id}>{item.card.info.name}</li>)}

//             </ul>
//         </div>
//     ) 
// }

// export default RestaurantMenu;
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]); // Added resId to the dependency array to refetch when resId changes

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" + resId
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h1>{costForTwoMessage}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <ul>
        {itemCards.map(item => (
          <li key={item.card.info.id}>{item.card.info.name}</li> // Using item.card.info.id as the key
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
