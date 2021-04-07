import React from 'react';
import {Link} from "react-router-dom"

const ProductPage = (props) => {
    const { product } = props.location.state; 
    return (
        <>
            <div className="productPage">
                <h1>{product.name}</h1>
                <img  src={product.media.source} alt=""/>
                <div>{product.description}</div>

                <div>
                    <button>-</button>
                    <button>+</button>

                </div>
                <Link>Go to Checkout</Link>
                <Link>Add more Product</Link>
                {/* Go to checkout Page */}
            </div>
        </>
    )
}

export default ProductPage
