import dayjs from 'dayjs'
import { Link } from 'react-router';



export function OrderTracking({order, productId}){

    const rightProduct = order.products.find((orderProduct)=>{
    return productId === orderProduct.productId
    })

    const totalTimeforDelivery = rightProduct.estimatedDeliveryTimeMs - order.orderTimeMs
    const timePassed = dayjs().valueOf() - order.orderTimeMs

    const deliveryPercent = (timePassed / totalTimeforDelivery) * 100 > 100 ? 100:(timePassed  / totalTimeforDelivery) * 100


    return(
        <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
            </Link>

            <div className="delivery-date">
            {deliveryPercent === 100 ? 'Delivered on':'Arriving on'} {dayjs(rightProduct.estimatedDeliveryTimeMs).format('dddd, MMMM DD')}
            </div>

            <div className="product-info">
                {rightProduct.product.name}
            </div>

            <div className="product-info">
                Quantity: {rightProduct.quantity}
            </div>

            <img className="product-image" src={rightProduct.product.image} />

            <div className="progress-labels-container">

                <div className="progress-label current-status">
                    Preparing
                </div>
                <div className="progress-label current-status">
                    Shipped
                </div>
                <div className= 'progress-label' >
                    Delivered
                </div>

            </div>

            <div className="progress-bar-container">
                <div className="progress-bar" style={{width: `${deliveryPercent}%`}} ></div>
            </div>
        </div>
    );
}