import { formatMoney } from "../../utils/money"
import axios from "axios"
import { useRef, useState } from "react"


export function CartItemDetails({cartItem,loadCart}){
    let quantityInput = useRef(null)
    const [updatingQuantity, setUpdateBtn] = useState(false)
    const [quantity, setQuantity] = useState(cartItem.quantity)

    const deleteBtn = async()=>{
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        await loadCart()
    }


    const setNewQuantity = (event)=>{
        setQuantity(event.target.value)
    }

    const keyInput = (event)=>{
        if(event.key == 'Enter')
            updateQuantity()    
        if(event.key == 'Escape'){
            setQuantity(cartItem.quantity)
            setUpdateBtn(false)
            quantityInput.current.style.display = 'none'
        }
    }

    const updateQuantity = async() =>{
        if(!updatingQuantity){
            quantityInput.current.style.display = 'inline'
            setUpdateBtn(true)
            return;
        }

        if(quantity == 0)
            deleteBtn()

        if(quantity >= 1 && quantity != cartItem.quantity){
            await axios.put(`/api/cart-items/${cartItem.productId}`,{
                quantity : Number(quantity)
            })
            await loadCart()
        }

        setUpdateBtn(false)
        quantityInput.current.style.display = 'none'
    }

    return (
        <>  
            <img className="product-image"
            src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents * cartItem.quantity)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: <input value ={quantity} 
                        onKeyDown={keyInput}
                        onChange={setNewQuantity} ref={quantityInput} type="text" className="quantity-input"/>
                        <span className="quantity-label">{updatingQuantity ? '': quantity}</span>
                    </span>

                    <span className="update-quantity-link link-primary"
                    onClick={updateQuantity}>
                        {updatingQuantity ? 'Save':'Update'}
                    </span>

                    <span className="delete-quantity-link link-primary"
                    onClick={deleteBtn}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}