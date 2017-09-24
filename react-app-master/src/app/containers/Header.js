import {connect} from "react-redux";

import Header from "../components/Header";

import {withRouter} from "react-router-dom";

//state = store.getState() {cartItems: [], productState: {}}
//called for every subscribe
function mapReduxStateToReactProps(state) {
    return {
        //propName : value
        cartLength: state.cartItems.length
    }
}

let connectFn = connect(mapReduxStateToReactProps);

//HeaderContainer is a Pure Component
let HeaderContainer = connectFn(Header);

export default withRouter(HeaderContainer); //used withRouter for because on navigation active class wasn't updated. 