import dayjs from "dayjs";

export function DeliveryDate ({deliveryOptions, cartItem}){
    let rightDeliveryOption = deliveryOptions[cartItem.deliveryOptionId -1]
    
    return (
        <div className="delivery-date">
            Delivery date: {dayjs(rightDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM DD')}
        </div>
       );
}