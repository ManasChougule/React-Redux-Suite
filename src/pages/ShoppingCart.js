
import Items from "../components/ShoppingCart/Items";
import CartModal from "../components/ShoppingCart/CartModal";
import { shoppingCartSelector } from "../redux/reducers/shoppingCartReducer";
import { useSelector } from "react-redux";
import "../components/ShoppingCart/styles/shoppingCart.css"

export const ShoppingCart = ()=>{
    const {showCart} = useSelector(shoppingCartSelector);
    return (
        <div className="shoppingCartParent">
            <Items  />
            {showCart && <CartModal />}
        </div>
    );
};