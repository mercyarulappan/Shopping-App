import React, { useContext, useState } from 'react'
import './Navbar.css'
import bg1 from '../Assets/bg1.jpg'
import Mylogo from '../Assets/shoppinglogo.jpg'
import fashion from '../Assets/fashion.jpg'
import { Link } from 'react-router-dom'
import Cart from '../Assets/cart.jpeg'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {
    /*sliding the menuu icon lines */
    const [menu, setMenu] = useState("shop")
    const{getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img style={{height:'80px', width:'auto'}} src={fashion} alt=""/>
            <p>FASHION SHOPPING</p>
            
            
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop" ? <hr/> :<></>}</li>
           <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Mens</Link>{menu==="mens" ? <hr/> :<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link>{menu==="womens" ? <hr/> :<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids" ? <hr/> :<></>}</li>
        </ul>
        <img style={{height:'80px', width:'auto'}} src={Mylogo} alt=""/>
        <div className='nav-login-card'>
            <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
            <Link style={{textDecoration: 'none'}} to='/cart'><img style={{height:'50px'}} src={Cart} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        
    </div>
  )
}

export default Navbar
