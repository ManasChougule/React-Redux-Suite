import itemData from "./ItemData"
import ItemCard from "./ItemCard";
import styles from "./styles/Item.module.css"
import navStyles from "./styles/Navbar.module.css"

import { useDispatch , useSelector } from "react-redux";
import { actions } from "../../redux/reducers/shoppingCartReducer";
import { shoppingCartSelector } from "../../redux/reducers/shoppingCartReducer";

function Items(){

    const dispatch = useDispatch();
    const { total , item } = useSelector(shoppingCartSelector);
    return(
        <div>
            <div className={navStyles.container}>
                <h1>Total : &#x20B9; {total}</h1>
                <h1>Items: {item}</h1>

                <div className={navStyles.buttonsWrapper}>
                    <button className={navStyles.button} onClick={()=>dispatch(actions.toggleCart())} >Cart</button>
                    <button className={navStyles.button} onClick={()=>dispatch(actions.clearCart())} >Reset</button>
                </div>
            </div>
            <div className={styles.wrapper}>
                {itemData.map((item,index)=>
                    <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} />
                )}
            </div>
        </div>
    )
}

export default Items;