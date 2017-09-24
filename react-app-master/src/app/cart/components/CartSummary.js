
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    //Creation : stage 1
    constructor(props) {
        super(props);
        console.log("summary created");

        this.state = {
            discount : props.amount * .30
        }
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("current amount in summary will recieve", this.props.amount);
        console.log("nextProps in summary will recieve", nextProps.amount);
    
        this.setState({
            discount: nextProps.amount * .30
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("summary should update discount", this.state.discount);
        console.log("sumamry next state discount", nextState.discount);

        if (this.props.amount != nextProps.amount || 
            this.state.discount != nextState.discount) {
                return true;
        }

        console.log("no render called");

        return false;
    }

    //Creation: stage 2
    componentWillMount() {
        console.log("summary will mount")
    }

    //Creation stage 4
    componentDidMount() {
        console.log("summary did mount");
    }
    
    //Creation Stage 3
    //return a view
    render() {
        console.log("summary render");

        return (
            <div> 
                {this.props.children}
            <h2>Cart Summary - {this.props.amount}</h2>
            <h2>With Discount - {this.state.discount}</h2>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}