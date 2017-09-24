
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>About : {this.props.match.params.team}</h2>
            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}