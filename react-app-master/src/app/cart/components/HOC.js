
import React, {Component} from "react";
import PropTypes from "prop-types";

import store from "../../Store";
import * as actions from "../Actions";

//import ReduxCart from "./ReduxCart";

export default class ReduxContainer extends Component {
    constructor(props) {
        super(props);

        //this.onAddItem = this.onAddItem.bind(this);
    }
    
    
    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            console.log("at cart component subscription");
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onAddItem(item) {
        let action = actions.addItemToCart(item);
        store.dispatch(action);
 
    }
    //

    //let action = actions.addItemToCart(item);
    //store.dispatch(action);

    
    render() {
        let items = store.getState().cartItems;

        let Component = this.props.component;

        return (
            <div> 
                <h2>Hoc here </h2>
                <Component items={items} 
                           onAddItem={(item) => this.onAddItem(item)} />
            </div>
        )
    }
} 


ReduxContainer.defaultProps = {
    
}

ReduxContainer.propTypes = {
    
}