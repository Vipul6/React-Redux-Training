import React, {Component} from "react";

import {NavLink} from "react-router-dom";


export default class Header extends Component {

    constructor(props) {
        super(props)
        console.log("header created")
    }

    componentDidMount() {
         
    }

    render() {
        console.log("***Header render");
        //props.cartLength passed from header container
        
        let cartLength = this.props.cartLength

        return (
            <div>
                <h2>{this.props.title}</h2>

                <div>
                    <NavLink to="/" exact 
                             className="button"
                             activeClassName="success">
                             Home
                    </NavLink>



                    <NavLink to="/products"  
                             className="button"
                             activeClassName="success">
                             Products
                    </NavLink>

                    <NavLink to="/cart"  
                             className="button"
                             activeClassName="success">
                             Cart [{cartLength}]
                    </NavLink>


                    <NavLink to="/go-to-cart"  
                             className="button"
                             activeClassName="success">
                             Go to cart
                    </NavLink>

                    <NavLink to="/about/ncr"  
                             className="button"
                             activeClassName="success">
                             About
                    </NavLink>
                </div>
            </div>
        )
    }

}