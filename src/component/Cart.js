import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart =()=>{
///subscribing to the store to show cart 
const cartItems = useSelector((store)=>store.cart.items);
 const dispatch = useDispatch();
 const handdleClearCart = () =>{
  dispatch(clearCart());
 }

    return(
      <div className="text-center m-4 p-4">
      <div className="w-6/12 m-auto">
      <button 
      className="p-2 m-2 border border-black bg-black text-white"
      onClick={handdleClearCart}
      >
      Clear Cart
      </button>
      <ItemList items={cartItems}/>
      </div>
      </div>
    )
}
export default Cart;