 import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();
const resInfo = useRestaurantMenu(resId);


  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h1>{costForTwoMessage}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <ul className="menu-items">
        {itemCards.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            </li> // Using item.card.info.id as the key
        ))} 
      </ul>
    </div>
  );
};

export default RestaurantMenu;
