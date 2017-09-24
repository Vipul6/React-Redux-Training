
import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

//requirement
//pass item as prop {id, name: '', price: 2, qty}
export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            qty: props.item.qty
        }
    }
    
    componentDidMount() {
        
    }

    onValueChange(e) {

        let {value} = e.target;

        //trigger render method
        this.setState({
            qty: value
        })
         
    }
    
    render() {
        console.log("cart item render");
        
        let item = this.props.item;

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <input value={this.state.qty} 
                            type="number"
                           onChange={(e) => this.onValueChange(e)}
                    />
                </td>
                <td>
                    State:
                    {item.price * this.state.qty}
                    <br />
                    Props Total
                    {item.price * this.props.item.qty}
                </td>

                <td>
                    <button onClick={ ()=> this.props.onUpdate(item.id, this.state.qty)}>
                        Update
                    </button>
                </td>

                <td>
                    <button onClick={ ()=> this.props.onRemove(item.id)}>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}