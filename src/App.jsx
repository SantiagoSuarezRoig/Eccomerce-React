import {Homepage} from './pages/HomePage'
import {CheckoutPage} from './pages/Checkout'
import {Routes , Route} from 'react-router'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='checkout' element={<CheckoutPage />} /> 


    </Routes>
     
    
    </>
  )
}

export default App
