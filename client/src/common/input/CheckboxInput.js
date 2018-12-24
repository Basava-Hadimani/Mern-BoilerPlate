import  React from 'react';
import PropTypes from 'prop-types';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FieldFeedbacks, FormGroup, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';

class CheckboxInput extends  React.Component{
    render(){
        return(
                <FormGroup for={this.props.name}>
                    <FormControlLabel htmlFor={this.props.name} style={styles.lableStyle}>{this.props.label}{this.props.required?<b
                        style={{color: "#2c3d4d"}}>*</b>:null}</FormControlLabel>
                    <FormControlInput
                        type="checkbox"
                        id={this.props.name}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={(event)=>{
                            this.props.onChange(event);

                        }}
                        className="form-control"
                        readOnly={this.props.readOnly}
                        onClick={this.props.onClick}
                    />
                </FormGroup>

        );
    }
}

CheckboxInput.propTypes ={
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired
};

const styles = {

    lableStyle:{
        color:"#999",
        fontSize: 12
    },
    errorStyle:{
        fontSize: 11,
        overflow: "hidden"
    }

};

export default CheckboxInput;