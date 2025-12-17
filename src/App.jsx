import {Homepage} from './pages/Home/HomePage'
import {CheckoutPage} from './pages/Checkout/CheckoutPage'
import {OrdersPage} from './pages/Orders/OrdersPage'
import {TrackingPage} from './pages/Tracking/TrackingPage'
import {NotFound404} from './pages/NotFound404'
import axios from 'axios'

import { useEffect, useState } from 'react'
import {Routes , Route} from 'react-router'
import './App.css'

function App() {
  const [cart,setCart] = useState([])

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product').
    then((response)=>{
      setCart(response.data)
    })

  },[])

  return (
    <>
    
    <Routes>
      <Route index element={<Homepage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart}/>} /> 
      <Route path='orders' element={<OrdersPage cart={cart}/>} /> 
      <Route path='tracking' element={<TrackingPage cart={cart}/>} />

      <Route path='*' element={<NotFound404 cart={cart}/>} /> 

    </Routes>
     
    
    </>
  )
}

export default App
