
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router";
// import useRestaurantMenu from "../../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";
// import {useState} from "react";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const [showIndex,setShowIndex] = useState(0) // default the first one is open

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[2]?.card?.card?.info;
//   const { itemCards } =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
//   const categories =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
//       (c) =>
//         c.card?.card?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );

//   //  console.log(categories);

//   return (
//     <div className=" text-center ">
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <h1 className="font-bold text-lg mb-4">{costForTwoMessage}</h1>

//       {
//         categories.map((category, index) => (
//                       <RestaurantCategory key={index} data={category?.card?.card} showItems={index ===showIndex ? setShowIndex(true):setShowIndex(false)}/>
//                     )
       
//       )}
//     </div>
//   );
// };


// export default RestaurantMenu;
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null); // Set null as default, no category open initially

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // Function to handle toggling the category open or closed
  const handleCategoryClick = (index) => {
    // Toggle the visibility of the category (open or close)
    setShowIndex(index === showIndex ? null : index);
  };

  return (
    <div className=" text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h1 className="font-bold text-lg mb-4">{costForTwoMessage}</h1>

      {categories.map((category, index) => (
        <div key={index}>
          {/* On click, toggle the category */}
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex ?true : false} // This is a boolean that shows or hides items
           setShowIndex = {() =>setShowIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
