
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductWidget from "../components/ProductWidget";

import {addItemToCart} from "../../cart/Actions";

const mapStateToProps = (state) => {
    return {
         
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: bindActionCreators(addItemToCart, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductWidget)