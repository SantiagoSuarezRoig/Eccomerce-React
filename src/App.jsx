import {Homepage} from './pages/Home/HomePage'
import {CheckoutPage} from './pages/Checkout/CheckoutPage'
import {OrdersPage} from './pages/Orders/OrdersPage'
import {TrackingPage} from './pages/Tracking/TrackingPage'

import {Routes , Route} from 'react-router'
import './App.css'

function App() {

  return (
    <>
    <Routes>

      <Route index element={<Homepage />} />
      <Route path='checkout' element={<CheckoutPage />} /> 
      <Route path='orders' element={<OrdersPage />} /> 
      <Route path='tracking' element={<TrackingPage />} /> 

    </Routes>
     
    
    </>
  )
}

export default App
