import  React from 'react';
import PropTypes from 'prop-types';

class PrimaryButton extends  React.Component{
    render(){
        const classVal = "wmsPrimaryButton pull-right";
        const classNameVal = this.props.className!=null ? classVal+" "+this.props.className : classVal;
        return(
                <button type="button"
                        className={classNameVal}
                        onClick={this.props.onClick}
                >
                    {this.props.label}
                </button>


        );
    }
}

PrimaryButton.propTypes ={
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};



export default PrimaryButton;