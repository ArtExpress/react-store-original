import React from 'react';
import "./Nav.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from "@mui/material"

const Nav = () => {
    return (
        <div className='nav'>
            <img 
                className='nav__icon' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU" 
                alt="" 
            />

            <div className="nav__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="nav__right">
                <p>Become a Member!</p>
                <p>Login</p>
                <Avatar />
                
                <div className="nav__cart">
                    <ShoppingCartIcon />
                </div>
            </div>
        </div>
    );
}

export default Nav;
