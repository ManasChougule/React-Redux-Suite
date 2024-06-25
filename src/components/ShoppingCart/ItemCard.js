import React from "react";
import styles from "./styles/ItemCard.module.css"
import { useDispatch , useSelector } from "react-redux";
import { actions } from "../../redux/reducers/shoppingCartReducer";
import { shoppingCartSelector } from "../../redux/reducers/shoppingCartReducer";

function ItemCard({ id ,name, price }) {
    const dispatch = useDispatch();
    const {cart , item , total} = useSelector(shoppingCartSelector);
    const handleAdd = (product) => { 
        const index = cart.findIndex((item) => item.id == product.id);
        let updated_cart = [];
        let updated_total = 0;
        let updated_item = 0
        if(index===-1){
            updated_cart = [...cart , {...product , quantity: 1}];
        }else{
            updated_cart = cart.map((cartItem, i) =>
                i === index ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
        }
        
        updated_total = total+product.price;
        updated_item = item+1;
        dispatch(actions.updateCart({updated_cart , updated_item , updated_total}));
    };

    const handleRemove = (id) => {
        const index = cart.findIndex((item) => item.id == id);
        let updated_cart = [];
        let updated_total = 0;
        let updated_item = 0
        if(index!=-1){
            const itemToRemove = cart[index];
            if (itemToRemove.quantity === 1) {
                updated_cart = cart.filter((item) => item.id !== id);
            } else {
                updated_cart = cart.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            updated_total = total - itemToRemove.price;
            updated_item = item-1;
            dispatch(actions.updateCart({updated_cart , updated_item , updated_total}))
        }
    };

    return (
    <div className={styles.itemCard}>
        <div className={styles.itemName}>{name}</div>
        <div className={styles.itemPrice}>&#x20B9; {price}</div>
        <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
            Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
            Remove
        </button>
        </div>
    </div>
    );
}

export default ItemCard;
