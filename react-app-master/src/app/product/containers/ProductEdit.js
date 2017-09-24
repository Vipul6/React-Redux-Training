
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductEdit from "../components/ProductEdit";
import * as actions from "../Actions";

const mapStateToProps = (state) => {
    return {
         loading: state.productState.loading,
         product: state.productState.product,
         brand: state.productState.brand,
         brands: state.productState.brands
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductEdit)