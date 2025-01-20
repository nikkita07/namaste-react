import { CDN_URL } from "../../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between items-center">
            {/* Text Section */}
            <div className="w-9/12">
              <span className="font-bold text-lg">{item.card.info.name}</span>
              <span className="ml-2 text-gray-600">
                - ₹{item.card.info.price / 100}
              </span>
              <p className="text-sm mt-2 text-gray-500">
                {item.card.info.description}
              </p>
            </div>
      
            <div className="w-3/12 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-36 h-auto rounded-lg"
              />
              <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold hover:bg-gray-100">
                ADD 
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
