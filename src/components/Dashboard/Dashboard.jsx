import React from 'react';
import { Link } from "react-router-dom";
import Product from "./Product/Product"
import { Paper } from "@material-ui/core"
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined';



import "./dashboard.css"

const Dashboard = ({products, onAddToCarts}) => {




    return (
        <>
            <div className="dashboard">
                <div className="frontPage">
                    <div className="sidemenu">
                        <ul>
                            <li className="cat"><ReorderOutlinedIcon className="icon iconLeft" /><p><span>CATEGORIES</span><ArrowForwardIosOutlinedIcon className="icon iconRight"   /></p></li>
                            <li><Link to=""><BusinessCenterOutlinedIcon className="icon iconLeft" /><p> <span>Clothings</span><ArrowForwardIosOutlinedIcon  className="icon iconRight" /></p></Link></li>
                            <li><Link to=""><ComputerOutlinedIcon className="icon iconLeft" /> <p><span>Electronics</span><ArrowForwardIosOutlinedIcon className="icon iconRight" /></p></Link></li>
                            <li><Link to=""><BeachAccessOutlinedIcon className="icon iconLeft" /> <p><span>jewellerys</span><ArrowForwardIosOutlinedIcon className="icon iconRight" /></p></Link></li>
                            <li><Link to=""> <BrokenImageIcon className="icon iconLeft" /><p> <span>Health & Beauty</span><ArrowForwardIosOutlinedIcon className="icon iconRight" /></p></Link></li>
                            <li><Link to=""><AccessTimeOutlinedIcon className="icon iconLeft" /><p> <span>Watches</span><ArrowForwardIosOutlinedIcon className="icon iconRight" /></p></Link></li>
                            <li><Link to=""> <TelegramIcon className="icon iconLeft" /><p> <span>Shoes</span><ArrowForwardIosOutlinedIcon className="icon iconRight" /></p></Link></li>
                            <li><Link to=""><SportsSoccerOutlinedIcon className="icon iconLeft" /> <p><span>Sport</span><ArrowForwardIosOutlinedIcon className="icon iconRight" /></p></Link></li>
                        </ul>
                    </div>
                    <Paper className="dashboard_card">
                        <div className="dashboard_cardImage">
                            <div className="dashboard_cardImage_content">
                                <h4>Spring 2021</h4>
                                <h1> <span style={{color: "#333", marginRight: "5px"}}>WOMEN</span>FASHION</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet cupiditate 
                                   
                                </p>
                                <button className="dash_btn">Shop Now</button>
                            </div>
                        </div>
                        <div className="card_base">
                                <div>
                                    <h3>Money back</h3>
                                    <p>30Days Money Back Guarantee</p>
                                </div>
                                <div>
                                    <h3>Free Shipping</h3>
                                    <p>Shipping on Order over $99</p>
                                </div>
                                <div>
                                    <h3>Special Sales</h3>
                                    <p>Extra 5% off on all item3</p>
                                </div>
                        </div>
                    </Paper>
                </div>
                {/* Clothings */}
               <section>
                    <h1 style={{ color: "#333", marginLeft: "40px",padding: "20px" }}>Clothings</h1>
                    <div className="container product" >
                        {products.map((product,index) => (product.categories.map((item) => item.slug === "clothings" ? <Product id={index} onAddToCarts={onAddToCarts}  key={product.id} product={product} /> : null ))
                        )}
                    </div>
                </section>
                {/* Electronics */}
                <section>
                    <h1 style={{ color: "#333", marginLeft: "40px",padding: "20px" }}>Electronics</h1>
                    <div className="container product" >
                        {products.map((product,index) => (product.categories.map((item) => item.slug === "electronics" ? <Product id={index} onAddToCarts={onAddToCarts}  key={product.id} product={product} /> : null ))
                        )}
                    </div>
                </section>
                {/* Jewellery */}
                 <section>
                    <h1 style={{ color: "#333", marginLeft: "40px",padding: "20px" }}>Jewellerys</h1>
                    <div className="container product" >
                        {products.map((product,index) => (product.categories.map((item) => item.slug === "jewellerys" ? <Product id={index} onAddToCarts={onAddToCarts} key={ product.id} product={product} /> : null ))
                        )}
                    </div>
                </section>
                {/* Watches */}
                 <section>
                    <h1 style={{ color: "#333", marginLeft: "40px",padding: "20px" }}>Watches</h1>
                    <div className="container product" >
                        {products.map((product,index) => (product.categories.map((item) => item.slug === "watches" || item.name === "Watches" ? <Product id={index} key={product.id} product={product} />  : null ))
                        )}
                    </div>
                </section>
            </div>   
        </>
    )
}

export default Dashboard;
