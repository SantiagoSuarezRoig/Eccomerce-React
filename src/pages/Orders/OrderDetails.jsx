import Carrito from '../../assets/images/icons/buy-again.png'
import checkmark from '../../assets/images/icons/checkmark-white.png'
import dayjs from 'dayjs'
import {Link} from 'react-router'
import {Fragment} from 'react'
import axios from 'axios'
import { useState , useRef} from 'react'

export function OrderDetails({order, loadCart}){

    let timeOutAddedCheck = useRef(null)
    const [buyAgainMessage, setBuyAgainMessage] = useState('Add to Cart')
    const [buyAgainIcon, setBuyAgainIcon] = useState(Carrito)

    const addToCart = async (product) =>{
        clearTimeout(timeOutAddedCheck.current)
        setBuyAgainMessage('Added')
        setBuyAgainIcon(checkmark)
        timeOutAddedCheck.current = setTimeout(()=>{
                    setBuyAgainMessage('Add to Cart')
                    setBuyAgainIcon(Carrito)        
                },2000)
        
        
        await axios.post('/api/cart-items',{
            productId: product.id,
            quantity : 1
        })
        await loadCart()
    }


    return(
        <div className="order-details-grid">
            {order.products.map((orderProduct)=>{
                return (
                    <Fragment key={orderProduct.productId}>
                        <div className="product-image-container">
                            <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                            {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                            Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM DD')}
                            </div>
                            <div className="product-quantity">
                            Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary" 
                            onClick={()=>{
                                addToCart(orderProduct.product)
                                }}>
                                <img className="buy-again-icon" src={buyAgainIcon} />
                                <span className="buy-again-message">{buyAgainMessage}</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <Link to={`/tracking/${order.id}/${orderProduct.productId}`}>
                            <button className="track-package-button button-secondary">
                                Track package
                            </button>
                            </Link>
                        </div>                        
                    </Fragment>
                );
            })}
        </div>
    );
}