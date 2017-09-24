import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({year, company}) {
    //let {year, company} = props;
    return (
        <div>
            <hr/>
            <p>Copyrights@{year}, {company}</p>
        </div>
    );
}

Footer.propTypes = {
    //mandatory
    year: PropTypes.number.isRequired,
    //optional
    company: PropTypes.string
}

Footer.defaultProps = {
    company: 'Product App'
}
