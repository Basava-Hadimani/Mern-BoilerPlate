import React from "react";
import PropTypes from "prop-types";
import SweetAlert from "react-bootstrap-sweetalert";

class ConfirmPopUp extends React.Component{
	constructor(props){
		super(props);
		this.state = {isShowAlert:true};
		this.onCancel = this.onCancel.bind(this);
	}

	onCancel(){
		this.setState({isShowAlert:false});
		if(typeof this.props.onCancel != "undefined"){
            this.props.onCancel();
		}
	}

	render(){
		if(!this.state.isShowAlert){
			return null;
		}
		return (
				<SweetAlert
					custom
					showCancel
					showCloseButton
					buttonsStyling
					title={<span style={{fontSize:18,float:"left",marginButton:50,marginBottom:38}}>{this.props.title}</span>}
					confirmButtonClass='wmsPrimaryButton'
					confirmBtnText={<span style={{marginButton:50}}>{(this.props.confirmText)?this.props.confirmText:"Confirm"}</span>}
					cancelBtnText={<span style={{marginRight:8}}>{(this.props.cancelText)?this.props.cancelText:"Cancel"}</span>}
					confirmBtnBsStyle="primary"
					cancelBtnBsStyle="default"
					onConfirm={this.props.onConfirm}
					onCancel={this.onCancel}
				>
				</SweetAlert>
			);
	}
}

ConfirmPopUp.propTypes={
	title: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
	onCancel: PropTypes.func,
	confirmText: PropTypes.string,
	cancelText: PropTypes.string,

}

export default ConfirmPopUp;