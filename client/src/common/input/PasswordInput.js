import  React from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from 'react-bootstrap';
import {FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
// const FormGroup = Bootstrap4Helpers.FormGroup;

class PasswordInput extends  React.Component{
    render(){
        return(
            <div>
                <FormGroup for={this.props.name}>
                    <label htmlFor={this.props.name} style={styles.lableStyle}>{this.props.label}{this.props.required?<b
                        style={{color: "#2c3d4d"}}>*</b>:null}</label>
                    <input
                        type="password"
                        id={this.props.name}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={(event)=>{
                            this.props.onChange(event);
                        }}
                        className="form-control"
                        pattern=".{5,}"
                        required={this.props.required}
                        readOnly={this.props.readOnly} />
                    {this.props.required?<FieldFeedbacks for={this.props.name} show="all" className="form-control-feedback" style={styles.errorStyle}>
                        <FieldFeedback when="valueMissing" />
                        <FieldFeedback when="patternMismatch">Should be at least 5 characters long</FieldFeedback>
                        <FieldFeedback when={value => !/\d/.test(value)} warning>Should contain numbers</FieldFeedback>
                        <FieldFeedback when={value => !/[a-z]/.test(value)} warning>Should contain small letters</FieldFeedback>
                        <FieldFeedback when={value => !/[A-Z]/.test(value)} warning>Should contain capital letters</FieldFeedback>
                        <FieldFeedback when={value => !/\W/.test(value)} warning>Should contain special characters</FieldFeedback>
                    </FieldFeedbacks>:null}

                </FormGroup>

            </div>

        );
    }
}

PasswordInput.propTypes ={
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

export default PasswordInput;