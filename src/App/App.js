import React,{useState, useEffect} from 'react'
import {Navbar, Dashboard,ProductPage} from "../components";
import {commerce} from "../lib/commerce";
import "./styles.css"
import {BrowserRouter as Router , Route,Switch} from "react-router-dom";




import {ThemeProvider, createMuiTheme} from "@material-ui/core"







const App = () => {
    
    const [products , setProducts] = useState([]);
    const [categories, setCategories] = useState({});
    
    

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    
    const fetchCategoriesList = async () => {
            const { data } = await commerce.categories.list();
            setCategories(data);
    }



  
    console.log(products);
    console.log( categories);

    useEffect(() => {
        fetchProducts();
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
        
   })
    return (
        <Router>
        <ThemeProvider className="body" theme={theme}>
            <Navbar />
            <Switch>
            <Route exact path="/">
                <Dashboard categories={categories} products={products} />
            </Route>
            <Route exact path="/">
                <ProductPage categories={categories} products={products} />
            </Route>
            </Switch>
        </ThemeProvider>
        </Router>
    )
}

export default App
