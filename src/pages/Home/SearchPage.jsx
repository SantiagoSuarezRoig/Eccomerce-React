import { Header } from "../../components/Header";
import { useParams } from "react-router";
import { ProductsGrid } from "./ProductsGrid";

export function SearchPage({cart, products, loadCart}){
    const param = useParams()
    let {searchInput} = param
    searchInput = searchInput.toLowerCase()

    const productsFiltered = products.filter((product)=>{
        let similarToKeyWord = false;
        if(product.keyWords)
            product.keyWords.forEach(keyword =>{
                similarToKeyWord = keyword.toLowerCase().includes(searchInput)? true:similarToKeyWord
            })

        return product.name.toLowerCase().includes(searchInput) || similarToKeyWord 
    })



    return (
        <>
        <link rel="icon" type="image/svg+xml" href="lupa-favicon.png" />
            <Header cart={cart}/>

            <div className="home-page">
                {productsFiltered.length == 0 ? 
                'Nothing similar to that buddy'
                : 
                <ProductsGrid products={productsFiltered} loadCart={loadCart}/>  }
               
            </div>
        </>
    )
}