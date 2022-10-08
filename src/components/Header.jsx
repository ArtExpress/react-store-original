import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <MenuIcon />
            All
        </div>

        <div className="header__center">
            <p>Electronics</p>
            <p>Home Goods</p>
            <p>Clothes</p>
            <p>Health and Fitness</p>
            <p>Beauty and Personal Care</p>
        </div>

        <div className="header__right">
            <p>Deals</p>
            <p>Promotions</p>
        </div>
    </div>
  )
}

export default Header