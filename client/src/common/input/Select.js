import  React from 'react';
import PropTypes from 'prop-types';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
// import { FieldFeedbacks, FormGroup, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {DropdownButton, MenuItem, Button, Dropdown} from "react-bootstrap-4";

class Select extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            selectedOption: null,
        };
        this.getDropDownDataList=this.getDropDownDataList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    getDropDownDataList(){
        var dropDownList=[];
        if(this.props.dropDownList!==null && this.props.dropDownList.length!==0){
            dropDownList = this.props.dropDownList.map((option, index)=>{
                var name=(option.name)?option.name:option.attributeValue;
                return (<MenuItem key={option.id} value={option.id} onSelect={()=>this.handleSelect(option)}>{name}</MenuItem>)
            });
        }
        return dropDownList;
    }

    handleSelect(selectedOption){
        // let name = (selectedOption.name)?selectedOption.name:selectedOption.attributeValue;
        // this.setState({selectedOption:name});
        // this.props.onSelect(this.props.keyId,selectedOption);
    }

     handleChange(e){
        this.setState({ color: this.inputEl.value });
      }

    render(){
        var dropDownList=[];
        dropDownList=this.getDropDownDataList();
        return(
                <FormGroup for={this.props.name}>
                    <ControlLabel htmlFor={this.props.name} style={styles.lableStyle}>{this.props.label}{this.props.required?<b
                        style={{color: "#2c3d4d"}}>*</b>:null}</ControlLabel>
                    <FormControl
                        componentClass="select"
                        disabled={this.state.added}
                        onChange={this.handleChange}
                        inputRef={ el => this.inputEl=el }
                        placeholder="select"
                        required={"required"}
                        id={this.props.name}
                        name={this.props.name}
                    >
                    <option value="">0</option>
                    <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                    </FormControl>
                    <FormControl.Feedback />
                    {/*<FormControl.Feedback for={this.props.name} className="form-control-feedback"*/}
                                    {/*style={styles.errorStyle}>*/}
                        <FormControl.Feedback when="valueMissing" />
                    {/*</FormControl.Feedback>*/}
                </FormGroup>

        );
    }
}

Select.propTypes ={
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    dropDownList: PropTypes.array.isRequired,
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

export default Select;