import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";


export function DeliveryOptions({deliveryOptions, cartItem}){
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>

            {deliveryOptions.map((option)=>{
                return (
                    <div key={option.id} className="delivery-option">
                        <input type="radio" 
                            checked = {cartItem.deliveryOptionId == option.id}
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