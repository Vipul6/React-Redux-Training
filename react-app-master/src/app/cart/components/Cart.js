
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        //initlialize state
        this.state = {
            items: [],
            amount: 0,
            reload: true, //temp
        }
    }
    
    componentDidMount() {
        
    }

    addItem() {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id: id,
            name: "Product " + id,
            price: Math.ceil(Math.random() * 1000),
            qty: 1
        }

        //bad, mutablity
       // this.state.items.push(item);


       //let clone = [...this.state.items];
       //clone.push(item);
       
       this.setState({
           //items: clone

           items : [...this.state.items, item]
       }, () => {
           this.reCalculateAmount();
       });


        console.log("item added ", id);
        //bad
        //this.forceUpdate();

        //this.reCalculateAmount();
    }

    removeItem(id) {
        this.setState({
            items: this.state.items.filter(item => item.id != id)
        }, ()=>{
            this.reCalculateAmount();
        })
    }

    updateItem(id, qty) {
        
        let items = this.state.items.map( item => {
            if (id != item.id)
                return item;

            //bad, mutablity
            //item.qty = qty;

            //immutable
            return Object.assign({}, item, {qty: qty});
        });

        this.setState({
            items: items
        }, () => {
            this.reCalculateAmount();
        })
    }

    emptyCart() {

    }


    refresh() {
        this.setState({
            reload: !this.state.reload
        })
    }
        
    reCalculateAmount() {
        let total = 0;
        for (let item of this.state.items) {
            total += item.price * item.qty
        }

        this.setState({
            amount: total
        })

        console.log("State Amount", this.state.amount);
        console.log("Actual ", total);
    }


    
    render() {
        return (
            <div> 
            <h2>Cart [{this.state.items.length}]</h2>

            <button onClick={ ()=> this.addItem()} >
                Add
            </button>


            <button onClick={ ()=> this.refresh()} >
                Refresh
            </button>

 
            <CartList items={this.state.items}
            
                      onRemove={(id) => this.removeItem(id)}
                      onUpdate = {(id, qty) => this.updateItem(id, qty)}
             />

            <CartSummary amount={this.state.amount} >
                <h2> Summary page through parent: {this.state.amount}</h2>
                <h2>through parent : {this.state.discount}</h2>
            </CartSummary>
            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}