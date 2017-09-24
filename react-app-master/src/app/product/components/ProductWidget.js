import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

function ProductWidget(props) { 
        return (
            <div> 
                <article className="card">
                    <header>
                        <h2>{props.product.name}</h2>
                    </header>

                    <p>
                        Weight: {props.product.weight}
                    </p>

                    <p>
                        Price: {props.product.price}
                    </p>

                    <p>
                        Year: {props.product.year}
                    </p>

                    <footer>
                        
                        <Link to={`/products/edit/${props.product.id}`}
                              className="button">
                                Edit
                        </Link>
                      

                        <button onClick={() => props.addItemToCart(props.product)}>
                            +Cart
                        </button>
                    </footer>
                </article>
             
            </div>
        )
} 


ProductWidget.defaultProps = {
    
}

ProductWidget.propTypes = {
    
}

export default  ProductWidget;
