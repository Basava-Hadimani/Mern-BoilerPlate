import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert from "react-bootstrap-sweetalert";

class ErrorAlert extends React.Component {
    render()
    {
        return (
            <SweetAlert
                error
                title={<span style={{fontSize:18}}>{this.props.title}</span>}
                onConfirm={this.props.onClick}
                >
                {<span style={{color:"#ff0000",fontSize:14}}>{this.props.message}</span>}
            </SweetAlert>
        )

    }
};

ErrorAlert.propTypes ={
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};



export default ErrorAlert;