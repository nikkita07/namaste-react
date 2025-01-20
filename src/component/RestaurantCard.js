import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  // const {deliveryTime} = resData?.info?.sla;
  const { deliveryTime } = resData?.info?.sla || {};

  return (
    <div className="m-4 p-4 w-[250px] h-[480px] bg-[#f0f0f0] font-bold">
      <img className="rounded-lg " alt="" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-orange-400 py-2">{name}</h3>
      <h4 className="cuisines">{cuisines.join(" , ")}</h4>

      <h4 className="rating">{avgRating} stars</h4>
      <h4 className="deliveryTime">{deliveryTime} minutes</h4>
    </div>
  );
};

//Higher order component
//input -> restaurantCard => promotedRestaurantCard
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
