import './Header.css'
import {NavLink, useNavigate} from 'react-router'
import logowhite from '../assets/images/logo-white.png'
import MobileLogoWhite from '../assets/images/mobile-logo-white.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import searchIcon from '../assets/images/icons/search-icon.png'
import { useState } from 'react'


export function Header({cart}){
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()


    let CartTotalQuantity = 0;
    cart.forEach((cartItem)=>{
      CartTotalQuantity += cartItem.quantity
    })
    
    const searchBarInput = (event) => {
      setSearchInput(event.target.value)
    }

    const searchBtn = () =>{
      if(searchInput == '')
        return; 
      navigate(`/search/${searchInput}`)
    }


    return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={logowhite} />
          <img className="mobile-logo"
            src={MobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" 
        onKeyDown={(event)=>{
          if(event.key == 'Enter')
            searchBtn()
        }}
        onChange={searchBarInput}/>

        <button className="search-button" onClick={searchBtn}>
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{CartTotalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
    )
}