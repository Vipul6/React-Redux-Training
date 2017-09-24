
import React from "react";
import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

export default function ProductHome(props) { 
        return (
            <div> 
            <h2>Product Home</h2>

            <div>
                
                <NavLink to="/products/list" 
                        exact 
                        className="button"  
                        activeClassName="success" >
                        List
                </NavLink>

                <NavLink to="/products/create" 
                          
                        className="button"  
                        activeClassName="success" >
                        Create
                </NavLink>

                <NavLink to="/products/search"   
                        className="button"  
                        activeClassName="success" >
                        Search
                </NavLink>
                
            </div>

            <div>
                {props.children}
            </div>

            </div>
        )
} 


ProductHome.defaultProps = {
    
}

ProductHome.propTypes = {
    
}