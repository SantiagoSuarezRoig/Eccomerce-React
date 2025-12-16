import {Homepage} from './pages/HomePage'
import {Routes , Route} from 'react-router'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='checkout' element={<div>Testing shit</div>} /> 


    </Routes>
     
    
    </>
  )
}

export default App
