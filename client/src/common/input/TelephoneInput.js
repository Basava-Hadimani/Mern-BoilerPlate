import  React from 'react';
import PropTypes from 'prop-types';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FieldFeedbacks, FormGroup, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';

class TelephoneInput extends  React.Component{
    render(){
        return(
            <div>
                <FormGroup for={this.props.name}>
                    <FormControlLabel htmlFor={this.props.name} style={styles.lableStyle}>{this.props.label}{this.props.required?<b
                        style={{color: "#2c3d4d"}}>*</b>:null}</FormControlLabel>
                    <FormControlInput
                        type="tel"
                        id={this.props.name}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={(event)=>{
                            this.props.onChange(event);

                        }}
                        className="form-control"
                        required={this.props.required}
                        readOnly={this.props.readOnly}
                        />
                    <FieldFeedbacks for={this.props.name} className="form-control-feedback"
                                    style={styles.errorStyle}>
                        <FieldFeedback when="valueMissing"/>
                        {(this.props.required)?
                            <FieldFeedback when={value => /^ *$/.test(value)}>Please enter valid text</FieldFeedback>:null}
                    </FieldFeedbacks>
                </FormGroup>

            </div>

        );
    }
}

TelephoneInput.propTypes ={
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
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

export default TelephoneInput;