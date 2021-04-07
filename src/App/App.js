import React,{useState, useEffect} from 'react'
import {Navbar, Dashboard,ProductPage} from "../components";
import {commerce} from "../lib/commerce";
import "./styles.css"
import {BrowserRouter as Router , Route,Switch} from "react-router-dom";



import {ThemeProvider, createMuiTheme} from "@material-ui/core";






const App = () => {
    
    const [products , setProducts] = useState([]);
    const [categories, setCategories] = useState({});
    const [cart, setCart] = useState({})
    
    

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    
    const fetchCategoriesList = async () => {
            const { data } = await commerce.categories.list();
            setCategories(data);
    }



    const fetchCart= async () => {
        const  data = await commerce.cart.retrieve();
        setCart(data);
    }

    // 

    const addToCarts = async (productId, quantity) => {
        const{ cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }

// const handleUpdateCart = async(productId, quantity) => {
//     const { cart } = await commerce.cart.update(productId, { quantity });
//     setCart(cart);
// }
  
    console.log(cart);

    useEffect(() => {
        fetchProducts();
        fetchCart();
        fetchCategoriesList();
    },[])


   const theme =  createMuiTheme({
        palette: {
            primary: {
                main:"#FFDA6C"
            },
            secondary: {
                main:"#333"
            },
            background: {
                default: "#F3F3F3"
            }
        },
   });

    return (
        <Router>
        <ThemeProvider className="body" theme={theme}>
            <Navbar totalItems={cart.total_items}  />
            <Switch>
            <Route exact path="/">
                <Dashboard onAddToCarts={addToCarts}   categories={categories} products={products} />
            </Route>
            <Route exact path="/showproduct">
                <ProductPage categories={categories} />
            </Route>
            </Switch>
        </ThemeProvider>
        </Router>
    )
}

export default App
