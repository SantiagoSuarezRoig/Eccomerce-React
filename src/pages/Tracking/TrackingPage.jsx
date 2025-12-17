import {Header} from '../../components/Header'
import './TrackingPage.css'
import {useParams} from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { OrderTracking } from './OrderTracking'


export function TrackingPage({cart}){
    const param = useParams()
    const {orderId, productId} = param
    const [order,setOrder] = useState(null)

    
    
    useEffect(()=>{
        const fetchFromBack = async () =>{
            const response = await axios.get(`/api/orders/${orderId}?expand=products`)
            setOrder(response.data)
        }

        fetchFromBack()

    }, [orderId])
    

    
    return( 
        <>
        {order != null && 
            <>
            <title>Tracking</title>

            <Header cart={cart}/>


            <div className="tracking-page">
                <OrderTracking order={order} productId={productId} />
            </div>

            </>
        }

        </>
    )
}