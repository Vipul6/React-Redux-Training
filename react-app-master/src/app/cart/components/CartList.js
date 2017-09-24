
import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    shouldComponentUpdate2(nextProps) {
        console.log("cart list should update ");
        console.log("equal ", this.props.items == nextProps.items);

        if (this.props.items != nextProps.items) {
            return true;
        }

        console.log("no cart list render");
        return false;
    }
    
    render() {
        console.log("cart list render");
        
        let {items} = this.props;

        let rows = items.map ( (item, index) => (
            <CartItem item={item} 
                        key={item.id}
                        onRemove={this.props.onRemove}
                        onUpdate={this.props.onUpdate}
                        
                        
                         >

            </CartItem>
        ) );

        return (
           <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>

                    {rows}
                    
                </tbody>
            </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}