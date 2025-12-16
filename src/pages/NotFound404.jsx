import { Header } from "../components/Header";


export function NotFound404({cart}){
    return (
        <>
        
        <Header cart={cart}/>

        <div className="home-page">
            Error 404 page not found try again bitch
        </div>

        </>
    )
}