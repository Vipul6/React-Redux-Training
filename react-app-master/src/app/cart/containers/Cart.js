
import {connect} from "react-redux";

import {bindActionCreators} from 'redux';

import ReduxCart from "../components/ReduxCart";
import * as actions from "../Actions";


function reCalculateAmount(items) {
   let total = 0;
   for (let item of items) {
       total += item.price * item.qty
   }
 
   return total;
}

const mapStateToProps = (state) => {
   return {
        items: state.cartItems,

        //FIXME: reselect, computed value
        //called for every subscribe
        amount: reCalculateAmount(state.cartItems)
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
       //prop Name: function
       // addItemToCart: (item) => dispatch(actions.addItemToCart(item)) //updated way
       //addItemToCart: function (item) {
       //                    let action = actions.addItemToCart(item);
       //                    dispatch(action);
       //                 }
       addItemToCart: bindActionCreators(actions.addItemToCart, dispatch), //use this until you need to do some more in function like above

       //actions { addItemToCart, removeItem...}
       actions: bindActionCreators(actions, dispatch)
   }
}

export default connect(mapStateToProps, 
                   mapDispatchToProps) (ReduxCart)