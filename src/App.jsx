import {Homepage} from './pages/Home/HomePage'
import {CheckoutPage} from './pages/Checkout/CheckoutPage'
import {OrdersPage} from './pages/Orders/OrdersPage'
import {TrackingPage} from './pages/Tracking/TrackingPage'
import {NotFound404} from './pages/NotFound404'
import { SearchPage } from './pages/Home/SearchPage'
import axios from 'axios'

import { useEffect, useState } from 'react'
import {Routes , Route} from 'react-router'
import './App.css'

function App() {
  // window.axios = axios; Esto es por si quiero resetear el cart uso axios.post('/api/reset') en terminal

  const [products, setProducts] = useState([])
  const [cart,setCart] = useState([])
  
  const loadProduts = async () =>{
    const response = await axios.get('/api/products')
    setProducts(response.data)
  }

  const loadCart = async() =>{
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }

  useEffect(()=>{
    loadProduts()
    loadCart()
  },[])



  return (
    <>
    
    <Routes>
      <Route index element={<Homepage cart={cart} loadCart={loadCart} products={products} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart}/>} /> 
      <Route path='orders' element={<OrdersPage cart={cart} loadCart={loadCart}/>} /> 
      <Route path='tracking/:orderId/:productId' element={<TrackingPage cart={cart}/>} />

      <Route path='search/:searchInput' element={<SearchPage products={products} cart={cart} loadCart={loadCart}/>} /> 


      <Route path='*' element={<NotFound404 cart={cart}/>} /> 

    </Routes>
     
    
    </>
  )
}

export default App
