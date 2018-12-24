import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert from "react-bootstrap-sweetalert";

class WMSAlert extends React.Component {
    render()
    {
        return (
            <SweetAlert
                title={<span style={{fontSize:18}}>{this.props.title}</span>}
                onConfirm={this.props.onClick}>
                {<span style={{fontSize:14}}>{this.props.message?this.props.message:null}</span>}
            </SweetAlert>
        )

    }
};

WMSAlert.propTypes ={
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired

};



export default WMSAlert;
