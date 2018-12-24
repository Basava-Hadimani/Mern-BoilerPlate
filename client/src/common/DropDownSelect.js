import React from 'react';
import PropTypes from 'prop-types';
import {FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

import {connect} from 'react-redux';
import {DropdownButton, MenuItem, Button, Dropdown} from "react-bootstrap-4";

class DropDownSelect extends React.Component{
    constructor(){
        super();
        this.state={
            selectedOption: null,
            isErrorExists: false,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillReceiveProps(props){
        if((props.isChildRelation && props.isParentChanged) || props.isClearMe){
            this.setState({selectedOption:null});
            if(this.props.isRequired){
                this.setState({isErrorExists:true})
            }
        }
    }

    getDropDownDataList(){
        var dropDownList=[];
        if(this.props.dropDownList && this.props.dropDownList.length!==0 && Array.isArray(this.props.dropDownList)){
            // this.props.dropDownList.push({ id:1772, name: "None", displayName: "None", globalId:0 });
            dropDownList = this.props.dropDownList.map((option, index)=>{
               // var name=(option.name)?option.name:option.attributeValue;
                var name = (this.props.valDisplayName && option.hasOwnProperty(this.props.valDisplayName))? option[this.props.valDisplayName] : option.name;
                var val = (this.props.valKeyName && option.hasOwnProperty(this.props.valKeyName))? option[this.props.valKeyName] : option.id;
                return (<MenuItem key={option.id} value={val} onSelect={()=>this.handleSelect(option)}>{name}</MenuItem>)
            });
        }
        return dropDownList;
    }

    handleSelect(selectedOption){
        let name =  (this.props.valDisplayName && selectedOption.hasOwnProperty(this.props.valDisplayName))?selectedOption[this.props.valDisplayName]: (selectedOption.name);
        if(name=="None"){
            this.setState({selectedOption:"None selected"});
            this.props.onSelect(this.props.keyId,{});
        }else{
            this.setState({selectedOption:name});
            this.props.onSelect(this.props.keyId,selectedOption);
        }
    }

    render(){
        var dropDownList=[];
        dropDownList=this.getDropDownDataList();

        return (
                <div  className="frm-drop-down">
                    <label >{this.props.name}{this.props.isRequired?<b style={{color: "#2c3d4d"}}>*</b>:null}</label>
                    <DropdownButton style={(this.props.isErrorBorder)?{borderColor:"red"}:{}}  noCaret title={this.state.selectedOption?this.state.selectedOption:this.props.label}  id={this.props.keyId} disabled={(this.props.disable || dropDownList.length==0)} >
                        {dropDownList}
                    </DropdownButton>
                    {(this.props.isRequired && this.props.isErrorExists)?
                        <span style={{fontSize: 11, color: "red"}}>This field is mandatory</span>:null}
                </div>

        );
    }
}

DropDownSelect.propTypes={
    onSelect: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    dropDownList:PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    keyId: PropTypes.string.isRequired,
    isErrorExists: PropTypes.bool,
    errorMsg: PropTypes.string,
    valKeyName:PropTypes.string
}
const styles = {

    lableStyle:{
        color:"#999",
        fontSize: 12
    },
    errorStyle:{
        fontSize: 11,
        overflow: "hidden"
    },


};

export default DropDownSelect;
