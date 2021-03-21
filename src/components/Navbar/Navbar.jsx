import { Button, Badge, Typography } from '@material-ui/core';
import React from 'react'
import logo from "../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search"
import { ShoppingCart } from "@material-ui/icons";
import "./navbar.css"
import DoneIcon from '@material-ui/icons/Done';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';




const Navbar = () => {
    return (
        <>
            <div className="nav_sub">
                <div className="grow" />
                <div className="info">
                    <ul>
                        <li><a href="#">USD</a></li>
                        <li><a href="#">English</a></li>
                        <li><a href="#"><PersonOutlineOutlinedIcon className="icon" />  <span>My Account</span></a></li>
                        <li><a href="#"><FavoriteBorderSharpIcon className="icon" />  <span>WishList</span></a></li>
                        <li><a href="#"><ShoppingCartOutlinedIcon className="icon" />  <span></span>My Cart </a></li>
                        <li><a href="#"><DoneIcon className="icon" /> <span>Checkout</span> </a></li>
                        <li><a href="#"><LockOpenIcon className="icon" /> <span>Login</span></a></li>
                    </ul>
                </div>
            </div>
            <nav className="nav">
                <a href="#">
                    <div className="header_logo">
                        <h1>Econs</h1>
                        <img src={logo} className="image" alt="Econs_logo" />
                    </div>
                </a>
                <div className="header_form_cart">
                    <div className="header_form">
                        <form>
                            <select className="select">
                                <option>Clothings</option>
                                <option>Electronics</option>
                                <option>jewellerys</option>
                                <option>Health & Beauty</option>
                                <option>Watches</option>
                                <option>Shoes</option>
                            </select>
                            <input placeholder="Search here..." type="text" name="categories" id="categories" />
                            <button className="btn" type="submit">
                                <SearchIcon classname="icon" />
                            </button>
                        </form>
                    </div>
                    <div className="header_cartButton">
                        <Button className="header_cartButton" arial-label="Show cart Item" >
                            <ShoppingCart />
                            <Badge style={{ marginLeft: "15px", marginRight: "15px" }} badgeContent={4} color="primary" />
                            <Typography >CART - #300</Typography>
                        </Button>
                    </div>
                </div>
            </nav>
            <div className="categories">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">CLOTHING</a></li>
                    <li><a href="#">ELECTRONICS</a></li>
                    <li><a href="#">HEALTH & BEAUTY</a></li>
                    <li><a href="#">WATCHES</a></li>
                    <li><a href="#">SHEOS</a></li>
                </ul>
            </div>
        </>

    )
}

export default Navbar;
