    
import React from "react";
import PropTypes from "prop-types";

export default function NotFound(props) { 
        return (
            <div> 
            <h2>Not Found - {props.match.url}</h2>
            </div>
        )
} 


NotFound.defaultProps = {
    
}

NotFound.propTypes = {
    
}