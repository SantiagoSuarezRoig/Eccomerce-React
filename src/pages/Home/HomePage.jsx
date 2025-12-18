import './HomePage.css'
import {Header} from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'


export function Homepage({cart, loadCart, products}){
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