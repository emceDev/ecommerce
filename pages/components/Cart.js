import { useEffect, useState } from "react"
import styles from '../../styles/form.module.css'

function Cart(props) {
    return ( 
        <div className={styles.cart}>
            <p>Cart:</p>
            <div className={styles.cartItems}>
            {props.products.map(x=>{
                return <li>{x}</li>
            })}
            </div>
        </div>
        );
}

export default Cart;