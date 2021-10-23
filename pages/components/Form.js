import { useEffect, useState } from "react"
import styles from '../../styles/form.module.css'
import Cart from '../components/Cart'

function Form() {
    const [buyerName, setBuyerName] = useState([]);
    const [sellerName, setSellerName] = useState([]);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState('');

    const sendData = async () =>{
        const res = await fetch('/api/SendData', {
            body: JSON.stringify({
                buyerName,
                sellerName,
                cart
            }),
            headers: {
            'Content-Type': 'application/json'
            },
            method: 'POST'
        })
    
        const result = await res.json()
        setError(result.error)
    }
    const handleBuyForm = async event => {
        event.preventDefault()
        console.log('form submitted')
        if (cart.length === 0) {
            setError('cart is empty')
        } else if(buyerName.length === 0 || sellerName === 0){
            setError('please fill the transaction holders names')
        }else{
            sendData()
        }
        }
    
        useEffect(()=>{
            console.log(cart)
        },[cart])

    const addToCart = (e) =>{
        e.preventDefault()
        setError('')
        const productInput = document.getElementById('productName')
        const productName = productInput.value.trim()
        productInput.value=''
        const format = /[`!@#$%^&*()+\=\[\]{};':"\\|.<>\/?~]/

        if(productName.length===0){
            return setError('please fill the fields')
        }
        if(format.test(productName)===true){
            return setError('please do not use special characters other than , _ -')
        }
        else if(productName.search(',')!==-1){
            let productArr = productName.split(',')
            return setCart([...cart, ...productArr])
        }
        else{
            return setCart([...cart, productName])
            
        }
    }

    return ( 
    <div className={styles.form}>
        <p className={styles.error}> {error}</p>
        
        <form onSubmit={handleBuyForm}>
            <label htmlFor="name">Buyer:</label>
            <input id="name" type="text" onChange={(e)=>setBuyerName(e.target.value)} required/>
            <label htmlFor="name">Seller:</label>
            <input id="name" type="text" onChange={(e)=>setSellerName(e.target.value)} required/>

            <label htmlFor="productName">Product Name:</label>
            <input id="productName" type="text" placeholder="ex. apple, banana soup"/>
            <button onClick={addToCart}>add to cart</button>
            <button type="submit">Buy</button>
        </form>
        <Cart products={cart}/>


    </div>);
}

export default Form;