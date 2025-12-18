
import { OrderProduct } from './OrderProduct'

export function OrderDetails({order, loadCart}){
    return(
        <div className="order-details-grid">
            {order.products.map((orderProduct)=>{
                return (
                <OrderProduct orderProduct = {orderProduct} loadCart={loadCart} order={order}/>
                );
            })}
        </div>
    );
}