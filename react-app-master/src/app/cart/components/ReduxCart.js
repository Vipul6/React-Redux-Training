
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";


export default class ReduxCart extends Component {
    constructor(props) {
        super(props);

    }

    getChildContext() {
        return {
            offer: "30% offer"
        }
    }
    



    addItem() {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id: id,
            name: "Product " + id,
            price: Math.ceil(Math.random() * 1000),
            qty: 1
        }

        //addItemToCart is passed as props frmo container
        this.props.addItemToCart(item);

        //or
        //this.props.actions.addItemToCart(item)
          
    }

    removeItem(id) {
         this.props.actions.removeItemFromCart(id);
    }

    updateItem(id, qty) {
        
        this.props.actions.updateItemInCart(id, qty);
    }
 

    refresh() {
    }



    
    render() {
        //get from redux container
        let items = this.props.items;

        return (
            <div> 
            <h2>Cart </h2>

            <button onClick={ ()=> this.addItem()} >
                Add
            </button>


            <button onClick={ ()=> this.refresh()} >
                Refresh
            </button>


            <button onClick={ ()=> this.props.actions.emptyCart()} >
                Empty
            </button>


            <button onClick={ ()=> this.props.history.push("/products/list")} >
                Products
            </button>

 
            <CartList items={items}
            
                      onRemove={(id) => this.removeItem(id)}
                      onUpdate = {(id, qty) => this.updateItem(id, qty)}
             />

            <CartSummary amount={this.props.amount} >
               <h1>Summary</h1>
            </CartSummary> 
            </div>
        )
    }

    
} 


ReduxCart.defaultProps = {
    
}

ReduxCart.propTypes = {
    
}

ReduxCart.childContextTypes = {
    offer: PropTypes.string
}