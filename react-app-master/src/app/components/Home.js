
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        }
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>Home</h2>

            {this.state.show &&  <h1>Now is shown </h1> }

            <button onClick={ () => this.setState({show: !this.state.show})} >
               { this.state.show? "Hide": <h2>Show</h2> }
            </button>

            </div>
        )
    }
} 


Home.defaultProps = {
    
}

Home.propTypes = {
    
}