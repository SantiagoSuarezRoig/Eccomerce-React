import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

export function DeliveryOptions({deliveryOptions, cartItem, loadCart }){
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>

            {deliveryOptions.map((option)=>{

                const updateDeliveryOption = async() =>{
                    await axios.put(`/api/cart-items/${cartItem.productId}`,{
                        deliveryOptionId : option.id
                    })
                    await loadCart()
                }

                return (
                    <div key={option.id} className="delivery-option"
                    onClick={updateDeliveryOption}>
                        <input type="radio" 
                            checked = {cartItem.deliveryOptionId == option.id}
                            onChange={()=>{}}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.id}`} />

                        <div>
                            <div className="delivery-option-date">
                            {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM DD')}
                            </div>
                            
                            <div className="delivery-option-price">
                            {option.priceCents == 0 ? 'FREE':formatMoney(option.priceCents)}-Shipping
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}