
import ItemList from "./ItemList.js";
const RestaurantCategory = ({ data ,showItems ,setShowIndex }) => {
 
  const handleClick = () => {
  //  setShowItems((prevState) => !prevState);
  setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-100 p-4 mx-auto my-4 shadow-lg">
        {/* Accordion Header */}
        <div className="justify-between flex cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="transform transition-transform duration-300">
            {showItems ? "▼" : "▲"}
          </span>
        </div>

        {/* Accordion Content */}
        {showItems && <ItemList items={data.itemCards}  
        
         />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
