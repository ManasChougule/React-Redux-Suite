import React from "react";
import styles from "./styles/CartModal.module.css"
import { useDispatch , useSelector } from "react-redux";
import { actions } from "../../redux/reducers/shoppingCartReducer";
import { shoppingCartSelector } from "../../redux/reducers/shoppingCartReducer";

function CartModal() {

    const dispatch = useDispatch();
    const {cart , total} = useSelector(shoppingCartSelector);

    return (
        <div className={styles.cartModal}>
            <div className={styles.closeButton} onClick={()=>dispatch(actions.toggleCart())}>
                Close
            </div>
            <div className={styles.clearButton} onClick={()=>dispatch(actions.clearCart())}>Clear</div>
            <div className={styles.itemContainer}>
                {cart.map((item)=>{
                    return (
                        <div className={styles.cartCard} key={item.id}>
                            <h1>{item.name}</h1>
                            <h3>X {item.quantity}</h3>
                            <h3>X {item.quantity * item.price}</h3>
                        </div>
                    )
                })}
            </div>
            <div className={styles.total}>
            <div className={styles.totalText}>Total Price :</div>
            <div className={styles.totalPrice}>&#x20B9; {total}</div>
            </div>
        </div>
    );
}

export default CartModal;
