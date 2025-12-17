import './HomePage.css'
import {Header} from '../../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductsGrid } from './ProductsGrid'

export function Homepage({cart, loadCart}){
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const getProductsData = async () =>{
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }

    getProductsData()
  },[])


    return (
        <>

        <title>Ecommerce Project</title> 
        <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
          
        <Header cart={cart}/>

        <div className="home-page">
          <ProductsGrid products={products} loadCart={loadCart} />
          
        </div>
        
        </>
    )
}