import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert from "react-bootstrap-sweetalert";

class SuccessAlert extends React.Component {
    render()
    {
        return (
            <SweetAlert
                success
                title={<span style={{fontSize:18}}>{this.props.title}</span>}
                onConfirm={this.props.onClick}>
                {<span style={{fontSize:14}}>{this.props.message?this.props.message:null}<strong style={{color:"#2c3d4d"}}>  {this.props.messageId?this.props.messageId:null}</strong></span>}
            </SweetAlert>
        )

    }
};

SuccessAlert.propTypes ={
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    messageId: PropTypes.number.isRequired

};



export default SuccessAlert;
